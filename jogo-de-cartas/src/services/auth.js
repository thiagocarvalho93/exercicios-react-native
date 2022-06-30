export const login = (usuario, senha) => {
  if (usuario === "" && senha === "") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            nome: "Thiago",
            email: "thiago@gmail.com",
          },
          token: "skldjfdsjklh23962579oashlasflhfl20382fslkdfskdf",
        });
      }, 100);
    });
  }
};
