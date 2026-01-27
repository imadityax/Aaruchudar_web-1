'use client';

import { useEffect, useState } from 'react';

export default function Chatbot() {
  const [showNotification, setShowNotification] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [scriptsError, setScriptsError] = useState(false);

  /* ================= LOAD BOTPRESS SCRIPTS ================= */

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.3/inject.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src =
      'https://files.bpcontent.cloud/2025/09/16/04/20250916041001-E90C098E.js';
    script2.defer = true;

    const handleError = () => {
      setScriptsError(true);
    };

    script1.onerror = handleError;
    script2.onerror = handleError;

    script1.onload = () => {
      document.head.appendChild(script2);

      script2.onload = () => {
        const start = Date.now();
        const timeout = 12000;

        const poll = setInterval(() => {
          const ready =
            typeof window !== 'undefined' &&
            (window as any).botpressWebChat &&
            typeof (window as any).botpressWebChat.sendEvent === 'function';

          if (ready) {
            clearInterval(poll);
            setScriptsLoaded(true);
          }

          if (Date.now() - start > timeout) {
            clearInterval(poll);
            setScriptsError(true);
          }
        }, 500);
      };
    };

    document.head.appendChild(script1);
  }, []);

  /* ================= 6 SEC DELAY – UI SAME ================= */

  useEffect(() => {
    if (!scriptsLoaded || scriptsError) return;

    const showTimer = setTimeout(() => setShowNotification(true), 6000);
    const hideTimer = setTimeout(() => setShowNotification(false), 16000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [scriptsLoaded, scriptsError]);

  const handleNotificationClick = () => {
    setShowNotification(false);
    try {
      (window as any).botpressWebChat?.sendEvent({ type: 'show' });
    } catch {}
  };

  return (
    <>
      {/* ================= NOTIFICATION (ALWAYS RENDERED) ================= */}
      <div
        className={`chatbot-notification ${
          scriptsLoaded && showNotification ? 'show' : 'hide'
        }`}
        onClick={handleNotificationClick}
      >
        <div className="notification-content">
          <div className="notification-icon">💬</div>
          <div className="notification-text">
            <strong>Ask Assistant</strong>
            <p>Hi! How can I help you today?</p>
          </div>
          <button
            className="notification-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      </div>

      {/* ================= FALLBACK ================= */}
      {scriptsError && (
        <div
          className="chatbot-notification show"
          onClick={() =>
            (window.location.href =
              'mailto:hi@aaruchudar.com?subject=Assistant%20Request')
          }
        >
          <div className="notification-content">
            <div className="notification-icon">✉️</div>
            <div className="notification-text">
              <strong>Ask Assistant</strong>
              <p>Hey Human, Know Us!</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= STYLES (UI UNCHANGED) ================= */}
      <style jsx>{`
        .chatbot-notification {
          position: fixed;
          bottom: 100px;
          right: 24px;
          z-index: 9999;
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          animation: slideInUp 0.5s ease-out,
            bounce 2s ease-in-out 0.5s infinite;
        }

        .chatbot-notification.show {
          opacity: 1;
          pointer-events: auto;
        }

        .notification-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(102, 126, 234, 0.3);
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 320px;
        }

        .notification-icon {
          font-size: 32px;
          animation: wave 1s ease-in-out infinite;
        }

        .notification-close {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(15deg);
          }
          75% {
            transform: rotate(-15deg);
          }
        }
      `}</style>
    </>
  );
}
