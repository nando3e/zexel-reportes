import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { reportType, timeFrame, employeeData } = await req.json()

    // In a real app, you would fetch actual employee data from your database

    const prompt = `
      Generate a detailed analysis report for a company's ${reportType} over the last ${timeFrame}.
      
      Here's the data to analyze:
      ${JSON.stringify(employeeData)}
      
      The report should include:
      1. An executive summary
      2. Key findings and insights
      3. Detailed analysis with supporting data
      4. Recommendations for improvement
      5. Conclusion
      
      Format the report in HTML for display on a web page.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    return NextResponse.json({ content: text })
  } catch (error) {
    console.error("AI Report Generation Error:", error)
    return NextResponse.json({ error: "Failed to generate AI report" }, { status: 500 })
  }
}

