import { SupabaseVectorStore } from '@langchain/community/vectorstores/supabase'
import { OpenAIEmbeddings } from '@langchain/openai'
import { createClient } from '@supabase/supabase-js'

const SUPERBASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2b2lsZXV6eGdhamdleGN4dXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NTI5MzEsImV4cCI6MjAzMTIyODkzMX0.F7sQbI2Q0r6hMOwDjgqMmvduLD2nyeDLgtStKgI7RFM"
const SUPABASE_URL_LC_CHATBOT = "https://uvoileuzxgajgexcxups.supabase.co"

const openAIApiKey = "sk-proj-rcltjQzrF7yh1lLRg4ScT3BlbkFJ2B8wwJPM2JzYR4ZPv7Yf"

const embeddings = new OpenAIEmbeddings({ openAIApiKey })

const client = createClient(SUPABASE_URL_LC_CHATBOT, SUPERBASE_API_KEY)

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'parent_polcy',
    queryName: 'match_documents_new'
})

const retriever = vectorStore.asRetriever()
console.log('Retriever', retriever)

export { retriever }