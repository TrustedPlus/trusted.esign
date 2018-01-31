import PropTypes from "prop-types";
import * as React from "react";

class CertificateChainInfo extends React.Component<any, any> {
  static contextTypes = {
    locale: PropTypes.string,
    localize: PropTypes.func,
  };

  constructor(props: any) {
    super(props);
    this.state = ({
      chain: [],
      isChainVerified: false,
    });
  }

  componentDidMount() {
    const { certificate } = this.props;

    const provider = certificate.provider;
    const chain = this.buildChain(certificate);
    const verifiedChain = [];

    if (chain && chain.length) {
      for (let j = 0; j < chain.length; j++) {
        const item = chain.items(j);
        const status = this.verifyCertificateChain(chain.items(j), provider);

        verifiedChain.push({certificate: item, status});
      }
    }

    this.setState({
      chain: verifiedChain,
      isChainVerified: true,
    });
  }

  render() {
    const { certificate, onClick, style } = this.props;

    return (
      <div className={style}>
        {this.getElements()}
      </ div>
    );
  }

  getElements() {
    const { certificate, onClick, style } = this.props;
    const { chain, isChainVerified } = this.state;

    const elements = [];
    let curKeyStyle = "";
    let curStatusStyle = "";

    if (isChainVerified && chain && chain.length) {
      for (let j: number = chain.length - 1; j >= 0; j--) {
        const element = chain[j].certificate;
        const status = chain[j].status;
        let circleStyle = "material-icons left chain_1";
        const vertlineStyle = {
          visibility: "hidden",
        };

        if (j < 10) {
          circleStyle = "material-icons left chain_" + (j + 1);
        } else {
          circleStyle = "material-icons left chain_10";
        }

        if (j > 0) {
          vertlineStyle.visibility = "visible";
        }

        if (status) {
          curStatusStyle = "cert_status_ok";
        } else {
          curStatusStyle = "cert_status_error";
        }

        if (j === 0) {
          curKeyStyle = certificate.key.length > 0 ? "key" : "";
        }

        elements.push(
          <div className={"collection collection-item avatar certs-collection chain-text"} key={element.serialNumber + "_" + element.thumbprint}>
            <div className="row chain-item">
              <div className="col s1">
                <i className={circleStyle}></i>
                <div className={"vert_line"} style={vertlineStyle}></div>
              </div>
              <div className="col s10" onClick={() => onClick(element)}>
                <div className="r-iconbox-link">
                  <div className="collection-title chain_textblock">{element.subjectFriendlyName}</div>
                  <div className="collection-info cert-info ">{element.issuerFriendlyName}</div>
                </div>
              </div>
              <div className="col s1">
                <div className={curKeyStyle + " "}></div>
                <div className={curStatusStyle + " "}></div>
              </div>
            </div>
          </div>);
      }
    }

    return elements;
  }

  buildChain = (certItem: any) => {
    const certificate = certItem.object ? certItem.object : window.PKISTORE.getPkiObject(certItem);

    try {
      if (certItem.provider && certItem.provider === "SYSTEM") {
        const chain = new trusted.pki.Chain();
        return chain.buildChain(certificate, window.TRUSTEDCERTIFICATECOLLECTION);
      } else {
        return trusted.utils.Csp.buildChain(certificate);
      }
    } catch (e) {
      return null;
    }
  }

  verifyCertificateChain = (cert: trusted.pki.Certificate, provider: string) => {
    try {
      if (provider === "SYSTEM") {
        const chain = new trusted.pki.Chain();
        const chainForVerify = chain.buildChain(cert, window.TRUSTEDCERTIFICATECOLLECTION);
        return chain.verifyChain(chainForVerify, null);
      } else {
        return trusted.utils.Csp.verifyCertificateChain(cert);
      }
    } catch (e) {
      return null;
    }
  }
}

export default CertificateChainInfo;
