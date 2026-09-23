// Service Worker for SenSey BingeLingo Push Notifications and PWA
const CACHE_NAME = 'sensei-cache-v1';

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for Push Notifications (FCM / Web Push API)
self.addEventListener('push', (event) => {
  let data = {
    title: 'SenSey Pratik Zamanı! 🐊',
    body: 'Günün dersini tamamla ve serini koru!',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    data: { url: '/' }
  };

  try {
    if (event.data) {
      const parsed = event.data.json();
      data = { ...data, ...parsed };
    }
  } catch (e) {
    if (event.data) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || '/icon-192x192.png',
    badge: data.badge || '/icon-192x192.png',
    vibrate: [200, 100, 200, 100, 200],
    tag: data.tag || 'sensei-daily-reminder',
    renotify: true,
    requireInteraction: false,
    actions: [
      { action: 'open_app', title: 'Ders Başlat 🚀' },
      { action: 'dismiss', title: 'Kapat' }
    ],
    data: data.data || { url: '/' }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') {
    return;
  }

  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          if (client.url.includes(self.location.origin)) {
            return client.focus();
          }
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
