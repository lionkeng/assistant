import { ChatWindow } from '@/components/ChatWindow'

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">Sophie Demo</h1>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            This demo integrates with an OpenAI function call to SERPAPI with
            the input set to `site:https://anewgo.com`
          </span>
        </li>
      </ul>
    </div>
  )
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I am Sophie. Ask me about finding new construction homes"
      titleText="New Home Search Assistant"
      emoji="🧙🏼‍♀️"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  )
}
