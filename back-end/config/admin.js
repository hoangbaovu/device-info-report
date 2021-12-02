module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bdc553397da73923a983a8a8d8893690'),
  },
});
