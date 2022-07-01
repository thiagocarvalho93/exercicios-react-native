export const login = (usuario, senha) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (usuario === "" && senha === "") {
        resolve({
          user: {
            nome: "Thiago",
            email: "thiago@gmail.com",
          },
          token: "skldjfdsjklh23962579oashlasflhfl20382fslkdfskdf",
        });
      }
    }, 100);
  });
};
