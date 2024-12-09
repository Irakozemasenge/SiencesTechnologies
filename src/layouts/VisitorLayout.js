import React, { useEffect, useState } from "react";
import VisitorNavbar from "../components/Navbar/VisitorNavbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ArrowUpCircle, MessageSquare } from "lucide-react"; // Import the icons

const VisitorLayout = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false); // State to control chat visibility
  const [message, setMessage] = useState(""); // Message input state
  const [messages, setMessages] = useState([]); // List of messages
  const [isSending, setIsSending] = useState(false); // To track if the message is being sent

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Distance défilée en pixels
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale scrollable
    const progress = (scrollTop / docHeight) * 100; // Calcul du pourcentage
    setScrollProgress(progress);

    // Show "Scroll to Top" button when the user scrolls down
    if (scrollTop > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    // Close chat when scrolling
    if (scrollTop > 50 && chatOpen) {
      setChatOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chatOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen); // Toggle chat visibility
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsSending(true);
      const newMessage = {
        id: Date.now(),
        text: message,
        status: "sent", // Message status "sent" initially
        isSender: true, // true for sent messages, false for received
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(""); // Clear input field

      // Simulate a delay and receive a reply (this can be replaced with real chat functionality)
      setTimeout(() => {
        const replyMessage = {
          id: Date.now() + 1,
          text: "Merci pour votre message, nous vous répondrons bientôt.",
          status: "delivered", // Delivered state
          isSender: false, // false for received messages
        };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
        setIsSending(false); // Reset sending state
      }, 1500);
    }
  };

  return (
    <>
      {/* Navbar */}
      <VisitorNavbar />

      {/* Progress bar */}
      <div
        className="fixed top-[4rem] left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Buttons at the bottom-right */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
        {/* Scroll to Top Button */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="bg-blue-500 text-white rounded-full p-4 shadow-lg"
            title="Scroll to top"
          >
            <ArrowUpCircle size={24} />
          </button>
        )}

        {/* Chat Button */}
        <button
          onClick={toggleChat}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg"
          title="Open Chat"
        >
          <MessageSquare size={24} />
        </button>
      </div>

      {/* Chat Form (conditional rendering) */}
      {chatOpen && (
        <div className="fixed bottom-24 right-8 z-50 bg-white shadow-lg p-4 rounded-lg w-72 sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 border-2 border-blue-500">
          <h2 className="text-xl font-bold mb-4">Chat en Direct</h2>
          <div className="overflow-auto h-64">
            {/* Chat Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 flex ${
                  msg.isSender ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-xl ${
                    msg.isSender
                      ? "bg-blue-500 text-white"
                      : "bg-gray-50 text-black"
                  } ${
                    msg.status === "sent"
                      ? "opacity-80"
                      : msg.status === "delivered"
                      ? "opacity-100"
                      : ""
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <div className="text-xs mt-1">
                    {msg.status === "sent" && <span>Envoi...</span>}
                    {msg.status === "delivered" && <span>Message livré</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="mt-4 flex items-center space-x-2">
            {/* Emoji Button */}
            <button className="text-xl">😊</button>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              rows="2"
              placeholder="Écrivez votre message..."
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-full"
              disabled={isSending}
            >
              {isSending ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VisitorLayout;
