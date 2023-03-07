const { OpenAIApi, Configuration } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const postPrompt = async (req, res, next) => {
  try {
    const { prompt } = req.body

    const configuration = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      max_tokens: 3000,
      temperature: 0.1,
      top_p: 1,
      stream: false,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    const answer = configuration.data.choices[0].text

    res.status(200).json({
      status: 'success',
      answer,
    })
  } catch (error) {
    res.status(404).json({ status: 'error', error })
  }
}

module.exports = { postPrompt }
