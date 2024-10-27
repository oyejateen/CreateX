import PropTypes from 'prop-types';
import { Assets } from '../../assets';

/**
 * @typedef {Object} SocialLinks
 * @property {string} mail - Email contact link
 * @property {string} github - GitHub profile link
 * @property {string} linkedin - LinkedIn profile link
 * @property {string} instagram - Instagram profile link
 */

/**
 * @typedef {Object} Sponsor
 * @property {string} title - Sponsor's title or role
 * @property {string} description - Brief description of the sponsor
 * @property {string} companyName - Name of the sponsor's company
 * @property {SocialLinks} socials - Object containing social media links
 * @property {string} imageUrl - URL of the sponsor's logo
 */

/** @type {Sponsor[]} */

export const SponsorsData = [
    {
      title: "Title Sponsor",
      description: "Innovative Technologies for Business Services (ITBS) Solution is a leading consultancy and business transformation company with five years of experience. We offer tailored solutions for resilient and responsive enterprises. Our multiple regional branches and numerous projects showcase our dedication to helping clients enhance performance, reduce costs, and adopt innovative strategies.",
      companyName: "InnovatechS",
      imageUrl: Assets.InnovatechS,
      socials: {
        github: "https://itbssolution.com/",
        linkedin: "https://www.linkedin.com/company/innovatechs/",
      },
    },
    {
      title: "Affiliate Partner",
      description: "Hashtrust follows the latest technology with innovative solutions to convert your imagination into a software reality. We're at the forefront of technology, consistently embracing the latest advancements. Our commitment to innovation allows us to turn your imaginative concepts into real-world software solutions with ease and precision.",
      companyName: "HashTrust Technologies",
      imageUrl: Assets.HashTrust,
      socials: {
        mail: "support@hashtrust.in",
        github: "https://www.hashtrust.in/",
        linkedin: "https://www.linkedin.com/company/hash-trust-technologies-pvt-ltd/",
        instagram: "https://www.instagram.com/hashtrust/ ",
      },
    },
  ];

  SponsorsData.forEach(sponsor => {
    PropTypes.checkPropTypes({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      socials: PropTypes.shape({
        mail: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        instagram: PropTypes.string.isRequired,
      }).isRequired,
    }, sponsor, 'prop', 'Sponsor');
  });