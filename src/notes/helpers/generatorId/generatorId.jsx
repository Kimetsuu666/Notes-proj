const generatorId = () => {
  return Math.floor(Math.random() * (200000 - 100000) + 100000);
};

export default generatorId();
