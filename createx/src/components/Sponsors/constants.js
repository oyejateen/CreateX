import PropTypes from 'prop-types';

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
 */

/** @type {Sponsor[]} */

export const SponsorsData = [
    {
      title: "Title Name 1",
      description: "Description for the first sponsor.",
      companyName: "Company Name 1",
      socials: {
        mail: "https://mail.com/company1",
        github: "https://github.com/company1",
        linkedin: "https://linkedin.com/company1",
        instagram: "https://instagram.com/company1",
      },
    },
    {
      title: "Title Name 2",
      description: "Description for the second sponsor.",
      companyName: "Company Name 2",
      socials: {
        mail: "https://mail.com/company2",
        github: "https://github.com/company2",
        linkedin: "https://linkedin.com/company2",
        instagram: "https://instagram.com/company2",
      },
    },
  ];

  SponsorsData.forEach(sponsor => {
    PropTypes.checkPropTypes({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      socials: PropTypes.shape({
        mail: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        instagram: PropTypes.string.isRequired,
      }).isRequired,
    }, sponsor, 'prop', 'Sponsor');
  });