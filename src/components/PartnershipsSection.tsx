import { motion } from "framer-motion";

import logo3cx from "@/assets/partners/3cx.png";
import logoAcer from "@/assets/partners/acer.png";
import logoAsus from "@/assets/partners/asus.png";
import logoAxis from "@/assets/partners/axis.png";
import logoCato from "@/assets/partners/cato-networks.png";
import logoCisco from "@/assets/partners/cisco.png";
import logoDell from "@/assets/partners/dell.png";
import logoFortinet from "@/assets/partners/fortinet.png";
import logoGoogle from "@/assets/partners/google.png";
import logoHp from "@/assets/partners/hp.png";
import logoHpe from "@/assets/partners/hpe.png";
import logoIntel from "@/assets/partners/intel.png";
import logoLenovo from "@/assets/partners/lenovo.png";
import logoMicrosoft from "@/assets/partners/microsoft.png";
import logoNinjaOne from "@/assets/partners/ninjaone.png";
import logoRhombus from "@/assets/partners/rhombus.png";
import logoRing from "@/assets/partners/ring.png";
import logoRuckus from "@/assets/partners/ruckus.png";
import logoSynology from "@/assets/partners/synology.png";
import logoUbiquiti from "@/assets/partners/ubiquiti.png";
import logoVertiv from "@/assets/partners/vertiv.png";
import logoVoip from "@/assets/partners/voip-supply.png";

const partners = [
  { name: "3CX", logo: logo3cx, logoClassName: "h-10 w-auto", url: "https://www.3cx.com" },
  { name: "Acer", logo: logoAcer, logoClassName: "h-6 w-auto", url: "https://www.acer.com" },
  { name: "Asus", logo: logoAsus, logoClassName: "h-6 w-auto", url: "https://www.asus.com" },
  { name: "Axis Communications", logo: logoAxis, logoClassName: "h-6 w-auto", url: "https://www.axis.com" },
  { name: "Cato Networks", logo: logoCato, logoClassName: "h-10 w-auto", url: "https://www.catonetworks.com" },
  { name: "Cisco", logo: logoCisco, logoClassName: "h-10 w-auto", url: "https://www.cisco.com" },
  { name: "Dell", logo: logoDell, logoClassName: "h-12 w-auto", url: "https://www.dell.com" },
  { name: "Fortinet", logo: logoFortinet, logoClassName: "h-7 w-auto", url: "https://www.fortinet.com" },
  { name: "Google", logo: logoGoogle, logoClassName: "h-7 w-auto", url: "https://workspace.google.com" },
  { name: "HP", logo: logoHp, logoClassName: "h-7 w-auto", url: "https://www.hp.com" },
  { name: "HPE", logo: logoHpe, logoClassName: "h-7 w-auto", url: "https://www.hpe.com" },
  { name: "Intel", logo: logoIntel, logoClassName: "h-7 w-auto", url: "https://www.intel.com" },
  { name: "Lenovo", logo: logoLenovo, logoClassName: "h-7 w-auto", url: "https://www.lenovo.com" },
  { name: "Microsoft", logo: logoMicrosoft, logoClassName: "h-6 w-auto", url: "https://www.microsoft.com" },
  { name: "NinjaOne", logo: logoNinjaOne, logoClassName: "h-6 w-auto", url: "https://www.ninjaone.com" },
  { name: "Rhombus", logo: logoRhombus, logoClassName: "h-8 w-auto", url: "https://www.rhombus.com" },
  { name: "Ring", logo: logoRing, logoClassName: "h-6 w-auto", url: "https://ring.com" },
  { name: "Ruckus", logo: logoRuckus, logoClassName: "h-6 w-auto", url: "https://www.commscope.com/ruckus" },
  { name: "Synology", logo: logoSynology, logoClassName: "h-7 w-auto", url: "https://www.synology.com" },
  { name: "Ubiquiti", logo: logoUbiquiti, logoClassName: "h-7 w-auto", url: "https://www.ui.com" },
  { name: "Vertiv", logo: logoVertiv, logoClassName: "h-6 w-auto", url: "https://www.vertiv.com" },
  { name: "VoIPTools", logo: logoVoip, logoClassName: "h-10 w-auto", url: "https://voiptools.com/" },
];

const PartnershipsSection = () => {
  return (
    <section id="partnerships" className="py-32 border-t border-border section-tinted">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-sm font-mono-display text-primary uppercase tracking-wider">Partnerships</span>
          <h2 className="text-3xl md:text-4xl font-medium uppercase mt-3 max-w-2xl">
            Industry-leading technology partners
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            We collaborate with cutting-edge technology providers to deliver customized products, professional support, and seamless implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="bg-card hover:bg-card-hover flex min-h-[118px] items-center justify-center px-5 py-8 md:min-h-[132px] md:px-6 transition-colors duration-250 snap-curve group"
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[70%] h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-250"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
