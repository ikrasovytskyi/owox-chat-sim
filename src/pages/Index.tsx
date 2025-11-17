import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ReactionEvent } from "@/components/ReactionEvent";
import { chatEvents } from "@/data/chatEvents";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [displayedEvents, setDisplayedEvents] = useState<typeof chatEvents>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < chatEvents.length) {
      const currentEvent = chatEvents[currentIndex];
      const delay = currentEvent.type === "reaction" ? 1500 : 5000;
      
      const timer = setTimeout(() => {
        setDisplayedEvents((prev) => [...prev, chatEvents[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedEvents]);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/50 bg-card/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">#marketing-performance-insights</h1>
              <p className="text-sm text-muted-foreground">
                Powered by OWOX • Tuesday, Oct 28
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="container mx-auto px-4 py-6">
        <div
          className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl overflow-hidden"
          style={{ maxHeight: "70vh", height: "70vh" }}
        >
          <div ref={chatContainerRef} className="h-full overflow-y-auto pr-3 flex flex-col justify-end">
            {displayedEvents.map((event, index) => {
              const isAnimating = index === displayedEvents.length - 1;
              
              if (event.type === "message") {
  const typingUsers = ["Anna", "James", "Julia", "David", "Rachel"];
  const showTyping = typingUsers.includes(event.data.sender);

  return (
    <ChatMessage
      key={event.data.id}
      message={event.data}
      isAnimating={isAnimating}
      showTyping={showTyping}
    />
  );
} else {
  return (
    <ReactionEvent
      key={event.data.id}
      reaction={event.data}
      isAnimating={isAnimating}
    />
  );
}

            })}
            
            {currentIndex >= chatEvents.length && (
              <div className="p-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4" />
                  <span>End of conversation</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
