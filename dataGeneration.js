const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const getData = async (nameOfBusiness, locationOfBusiness) => {
  try {
    const businessInput = `${nameOfBusiness} Business`;
    const location = `${locationOfBusiness}`;
    const typeOfBusiness = `Please provide the type of business that ${businessInput} is, in one line make it short`;
    const industry = `Please provide the industry sector that ${businessInput} belongs to in one line make it short`;
    const businessExplanation = `Advice me about starting a business in ${businessInput} also format the text properly and make each sub-heading bold`;
    const imgResponse_prompt = `Generate a realistic image that displays a ${businessInput}`;

    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const requests = [
      openai.createCompletion({
        model: "text-davinci-003",
        prompt: typeOfBusiness,
        temperature: 1.0,
        max_tokens: 350,
      }),

      openai.createCompletion({
        model: "text-davinci-003",
        prompt: industry,
        temperature: 1.0,
        max_tokens: 350,
      }),

      openai.createCompletion({
        model: "text-davinci-003",
        prompt: businessExplanation,
        temperature: 1.0,
        max_tokens: 300,
      }),

      openai.createImage({
        prompt: imgResponse_prompt,
        n: 1,
        size: "256x256",
      }),
    ];

    const responses = await Promise.all(requests);

    const typeOfBusinessResponse = responses[0]?.data?.choices[0]?.text;
    const industryResponse = responses[1]?.data?.choices[0]?.text;
    const businessExplanationResponse = responses[2]?.data?.choices[0]?.text;
    const imgResponse = responses[3]?.data?.data[0]?.url;

    return {
      typeOfBusiness: typeOfBusinessResponse || "Unable to generate response",
      industry: industryResponse || "Unable to generate response",
      businessExplanation: businessExplanationResponse || "Unable to generate response",
      imgResponse: imgResponse || "Unable to generate image URL",
    };
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to generate data");
  }
};

module.exports = getData;
