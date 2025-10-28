import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { chatMessages } from "@/data/chatMessages";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [displayedMessages, setDisplayedMessages] = useState<typeof chatMessages>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < chatMessages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, chatMessages[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

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
              <h1 className="text-xl font-bold text-foreground">sales-performance-insights</h1>
              <p className="text-sm text-muted-foreground">
                Powered by OWOX Analytics • Tuesday, Oct 28
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="container mx-auto px-4 py-6">
        <div
          ref={chatContainerRef}
          className="max-w-5xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-xl overflow-hidden"
          style={{ maxHeight: "70vh", height: "70vh" }}
        >
          <div className="h-full overflow-y-auto">
            {displayedMessages.map((message, index) => (
              <ChatMessage
                key={message.id}
                message={message}
                isAnimating={index === displayedMessages.length - 1}
              />
            ))}
            
            {currentIndex >= chatMessages.length && (
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
