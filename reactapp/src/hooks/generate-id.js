const useGenerateId = () => {
  const generateId = (initial) => {
    const time = new Date().getTime().toString();
    const id = `${initial}-${time}`;
    return id;
  };

  return generateId;
};

export default useGenerateId;
