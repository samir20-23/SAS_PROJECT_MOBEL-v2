const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

const readMedecins = async () => {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    return JSON.parse(data).medecins || [];
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
};

const writeMedecins = async (medecins) => {
  const data = JSON.stringify({ medecins }, null, 2);
  await fs.writeFile('data.json', data, 'utf8');
};

const viewMedecins = async () => {
  const medecins = await readMedecins();
  console.log('Médecins List:');
  medecins.forEach((medecin, index) => {
    console.log(`Médecin ${index + 1}:`);
    console.log(`Numéro d'inscription: ${medecin.numero}`);
    console.log(`Spécialité: ${medecin.specialite}`);
    console.log(`Cabinet: ${medecin.cabinet}\n`);
  });
};

const addMedecin = async () => {
  const numero = await askQuestion('Numéro d\'inscription du médecin?: ');
  const specialite = await askQuestion('Spécialité du médecin?: ');
  const cabinet = await askQuestion('Cabinet du médecin?: ');

  const newMedecin = { numero, specialite, cabinet };
  const medecins = await readMedecins();
  medecins.push(newMedecin);

  await writeMedecins(medecins);
  console.log('Médecin ajouté avec succès.');
  rl.close();
};

const main = async () => {
  await viewMedecins();
  await addMedecin();
};

main();
