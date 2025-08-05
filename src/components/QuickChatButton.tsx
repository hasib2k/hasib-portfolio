"use client";
import React from 'react';

export default function QuickChatButton() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 hover:scale-105 hover:shadow-xl cursor-pointer backdrop-blur-md border"
        style={{
          fontWeight: '600', 
          background: 'linear-gradient(135deg, rgba(16, 79, 143, 0.8) 0%, rgba(183, 201, 226, 0.6) 100%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(16, 79, 143, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
        aria-label="WhatsApp Chat"
        onClick={() => setShowPopup(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.624 1.934 6.6L4 29l7.6-1.934A12.96 12.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.56-1.5l-.4-.23-4.52 1.15 1.2-4.39-.26-.41A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.18 3.02c.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          <div className="bg-black/40 absolute inset-0" onClick={() => setShowPopup(false)}></div>
          <div className="relative m-6 w-full max-w-xs rounded-xl shadow-xl p-6 flex flex-col items-center animate-fadeIn backdrop-blur-md border" style={{
            background: 'linear-gradient(135deg, rgba(245, 246, 247, 0.9) 0%, rgba(183, 201, 226, 0.8) 100%)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(16, 79, 143, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}>
            <h4 className="text-lg font-semibold mb-2" style={{color: '#104F8F'}}>WhatsApp Chat</h4>
            <p className="mb-4 text-gray-700 text-center">Send a message to Hasib on WhatsApp:</p>
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const message = formData.get('message') as string;
                const url = `https://wa.me/+8801706776711?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
                setShowPopup(false);
              }}
            >
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-lg border border-blue-300 p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message..."
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-xl font-medium text-white backdrop-blur-md border transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 79, 143, 0.8) 0%, rgba(183, 201, 226, 0.6) 100%)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 16px 0 rgba(16, 79, 143, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                Send to WhatsApp
              </button>
            </form>
            <button
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
