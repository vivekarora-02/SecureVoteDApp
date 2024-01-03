const Election = artifacts.require("Election");

module.exports = function (deployer) {
  const authorityValue = "0x13F96eF0b368982A391C3d0887C40787fBdE18A6";
  const nameValue = "My Election";
  const descriptionValue = "Election to choose our next representative";

  deployer.deploy(Election, authorityValue, nameValue, descriptionValue);
};
