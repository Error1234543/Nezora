# Mehndi by Ekta

Mehsana-focused mehndi booking website.

- Customer website: repository root redirects to `/mehndi/`.
- Booking page: `mehndi/index.html`
- Admin preview: `mehndi/admin/`
- Booking options: customer visits Ekta's location, or Ekta visits the customer's home within 10 km.
- Areas include Mehsana city localities and nearby societies.
- Package prices: ₹1,200 / ₹1,500 / ₹2,000.
- Provisional home-visit travel fees: 0–3 km ₹100; 3–5 km ₹200; 5–10 km ₹350. Ekta must confirm exact route and final fee.

**Important demo limitation:** bookings are stored in browser localStorage only. The admin dashboard sees requests only in the same browser/device. This is not a shared online booking database, there is no secure admin login, and no real payment gateway. The WhatsApp share action opens a message draft; it does not send automatically. Before accepting real customer bookings, connect a secure backend/database, set Ekta's exact service-base address, verify the 10 km route calculation, and add a private contact number.
