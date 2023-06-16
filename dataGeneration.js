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
    const imgResponse_prompt = `Generate a realistic image that displays a ${businessInput}`;
  
    try {
      const { Configuration, OpenAIApi } = require("openai");
      const configuration = new Configuration({
        apiKey: "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"
      });
      const openai = new OpenAIApi(configuration);
  
      const typeOfBusinessResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${typeOfBusiness}`,
        temperature: 1.0,
        max_tokens: 350,
      });
  
      const industryResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${industry}`,
        temperature: 1.0,
        max_tokens: 350,
      });
  
      const descriptionOfTheBusinessResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${descriptionOfTheBusiness}`,
        temperature: 1.0,
        max_tokens: 350,
      });
  
      const business1Response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${business1}`,
        temperature: 1.7,
        max_tokens: 350,
      });
  
      const business2Response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${business2}`,
        temperature: 1.3,
        max_tokens: 350,
      });
  
      const legalRiskResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${legalRisk}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const financialRiskResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${financialRisk}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const operationalRiskResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${operationalRisk}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const marketRisksResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${marketRisks}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const fixedCostsResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${fixedCosts}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const variableCostResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${variableCost}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const totalStartupCostResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${totalStartupCost}`,
        max_tokens: 350,
        temperature: 0.8,
      });
  
      const imgResponse = await openai.createImage({
        prompt: `${imgResponse_prompt}`,
        n: 1,
        size: "256x256",
      });
  
      // Return an object containing all the responses
      return {
        typeOfBusiness: typeOfBusinessResponse.data.choices[0].text,
        industry: industryResponse.data.choices[0].text,
        descriptionOfTheBusiness: descriptionOfTheBusinessResponse.data.choices[0].text,
        business1: business1Response.data.choices[0].text,
        business2: business2Response.data.choices[0].text,
        legalRisk: legalRiskResponse.data.choices[0].text,
        financialRisk: financialRiskResponse.data.choices[0].text,
        operationalRisk: operationalRiskResponse.data.choices[0].text,
        marketRisks: marketRisksResponse.data.choices[0].text,
        fixedCosts: fixedCostsResponse.data.choices[0].text,
        variableCost: variableCostResponse.data.choices[0].text,
        totalStartupCost: totalStartupCostResponse.data.choices[0].text,
        imgResponse: imgResponse.data.data[0].url
      };
    } catch (error) {
      console.error(error.message);
      throw new Error("Failed to generate data");
    }
  };
  
module.exports = getData;