require("dotenv").config();
const getData = async (nameOfBusiness, locationOfBusiness) => {
  const businessInput = `${nameOfBusiness} Business`;
  const location = `${locationOfBusiness}`;
  const typeOfBusiness = `Please provide the type of business that ${businessInput} is, in one line make it short`;
  const industry = `Please provide the industry sector that ${businessInput} belongs to in one line make it short`;
  const descriptionOfTheBusiness = `Please provide a brief description of ${businessInput} in one line make it short`;
  const business1 = `provide one name of a business similar to ${businessInput} in one line make it short`;
  const business2 = `Please provide a name of a business similar to ${businessInput} in one line make it short`;
  const legalRisk = `Please list any potential legal risks of starting ${businessInput} in ${location} in two lines make it short`;
  const financialRisk = `Please list any potential financial risks of starting ${businessInput} in ${location} in two lines make it short`;
  const operationalRisk = `Please list any potential operational risks of starting ${businessInput} in ${location} in two lines make it short`;
  const marketRisks = `Please list any potential market risks of starting ${businessInput} in ${location} in two lines make it short`;
  const fixedCosts = `Please provide the amount of fixed costs needed to start a ${businessInput} in ${location} in two lines make it short`;
  const variableCost = `Please provide the amount of variable costs needed to start a ${businessInput} in ${location} in two lines make it short also provide the cost in naira`;
  const totalStartupCost = `Please provide an estimated total startup cost needed to start a ${businessInput} in ${location} in two lines make it short also provide the cost in naira`;
  const imgResponse_prompt = `Generate a realistic image that illustrates ${businessInput}`;

  try {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_APIKEY, // Replace with your actual API key
    });
    const openai = new OpenAIApi(configuration);

    const requests = [
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${typeOfBusiness}`,
        temperature: 1.8,
        max_tokens: 100,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${industry}`,
        temperature: 1.8,
        max_tokens: 100,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${descriptionOfTheBusiness}`,
        temperature: 1.8,
        max_tokens: 100,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${business1}`,
        temperature: 1.8,
        max_tokens: 100,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${business2}`,
        temperature: 1.5,
        max_tokens: 100,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${legalRisk}`,
        max_tokens: 100,
        temperature: 0.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${financialRisk}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${operationalRisk}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${marketRisks}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${fixedCosts}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${variableCost}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${totalStartupCost}`,
        max_tokens: 100,
        temperature: 1.8,
      }),
      openai.createImage({
        prompt: `${imgResponse_prompt}`,
        n: 1,
        size: "256x256",
      }),
    ];

    const results = await Promise.all(requests);

    // Return an object containing all the responses
    return {
      typeOfBusiness: results[0].data.choices[0].text,
      industry: results[1].data.choices[0].text,
      descriptionOfTheBusiness: results[2].data.choices[0].text,
      business1: results[3].data.choices[0].text,
      business2: results[4].data.choices[0].text,
      legalRisk: results[5].data.choices[0].text,
      financialRisk: results[6].data.choices[0].text,
      operationalRisk: results[7].data.choices[0].text,
      marketRisks: results[8].data.choices[0].text,
      fixedCosts: results[9].data.choices[0].text,
      variableCost: results[10].data.choices[0].text,
      totalStartupCost: results[11].data.choices[0].text,
      imgResponse: results[12].data.data[0].url,
    };
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to generate data");
  }
};

module.exports = getData;
          
