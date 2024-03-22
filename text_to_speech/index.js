import 'dotenv/config'
import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(process.env.HF_TOKEN)

console.log(process.env.HF_TOKEN);
// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const text = "It's an exciting time to be an A.I. engineer."

