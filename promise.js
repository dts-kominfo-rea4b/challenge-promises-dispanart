const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (mood) => {
  try {
    const bioskopX = await promiseTheaterIXX();
    const bioskopV = await promiseTheaterVGC();
    const allBioskop = [...bioskopX, ...bioskopV];

    const arrMood = allBioskop.filter((el) => el.hasil === mood);
    let jmlMood = `${mood} : ${arrMood.length}`;

    return jmlMood;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
