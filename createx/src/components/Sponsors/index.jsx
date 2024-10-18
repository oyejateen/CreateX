import React from "react";
import SponsorCard from "./SponsorCard/SponsorCard";

const Sponsors = () => {
  return (
    <div>
      <SponsorCard
        title="Title Name"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        companyName="Company Name"
        imageUrl="https://via.placeholder.com/150"
        socials={{
          mail: "https://mail.com/company",
          github: "https://github.com/company",
          linkedin: "https://linkedin.com/company",
          instagram: "https://instagram.com/company",
        }}
      />
    </div>
  );
};

export default Sponsors;
