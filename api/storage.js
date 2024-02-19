// Initialize Firebase Admin SDK
import admin from 'firebase-admin';
const serviceAccount = {
  "type": "service_account",
  "project_id": "blog-89278",
  "private_key_id": "ada535f47dec3a4dc17f29b158b297abc0e261b9",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrtwNH2+XYVZjh\nHy8tNcc1WMdWItVTMS296+Aq/qXtt3jfVQGVZcDQqBoMXTBvPMEHWDlTs30Oakl4\nEZymbFHJ/yJ3NCnW4+FDaFfNYDX77FKnwIj9bgq4yJ6IOQQpg23yIXrPyJfKLHmh\nU7VeSKJxkJdORClbGqZluZeLpqmeJEQhV9zsAUl0Hp6u54SUJ75qptc3GS51JGUR\nix29tXAthDglfY63i6DIR8N5VeM7mpuAhmfk3l9GDnLyxrXAC+rJZ15DkFB0+eCz\ngkgju9+8/hLqPnGGJYIxrqCw6JMflUVV7RS6WPKb3usFmaDOEDyVjC5PGRTe3FZC\nRge3iUhnAgMBAAECggEABNPb3UDS6O6bIjUgu+onpBnPXN4U1kZrLUw83KiVHKZM\nWScIKN2X+qXHObLDAlWYba7uyaohqW6WizAfkdQ4xm+MVgKa7IYylpUP5t++FMuT\nlVDF6S4XUhOd1WGY+tvNkwGa9M2EavQuJTl3v2NWYc/5WQN0kDGjHPgHSS9R1HbP\nwcY4BsBYk1fbiq/zgqg8kG9xvuI6rutHGQha6KnSaxCmvkD96aP8hnrDg5NmrMk6\nraI+bFiXrAoxKrJ8TVR2dujWauo/9bdak6uki9r1TKH8RS/+v60P4d+EM0ylrhRB\n53LMybJai+0YgPbfkdX4NR91+M8TdF0itP+JmEDlfQKBgQDY7TJxWzkbT6zHfSET\nz8taTGMxtU0RTfSzpI0wd5cu+zsHnwKCp9psrfW3y3j4RwX4jorq9Skdeuhy791P\nK6nFe6dZa1GSkBvFs/k0Ejlw94+umUqjcIbYZvPl/clOFsMKv4S9/JOp/MMOWEJf\nfFBg2Nq5/8xNpkY03pDOZfSjzQKBgQDKpQolVa4VUKMuTfs1+squFK0T/VHnx2Q1\n7tbkctNIyNHLvH8NpAbEvu0a/Csba4cqA/xz5IVjm4KlOnebisJ1+iJ7rJgZQLvi\nlaGkFOm23opDXO8XAUqGphAZRmvmGxnJQINmTaADdYume0T6xwLAszjFNK+ZPV4O\nwLID7LXRAwKBgQCI95u1/0dbez845kUQYU+gwEKRjEwQ9QvgsbGEPL50p6Rp93h6\nTsmXfW98kTjcatvWSQpluE4xkv1aNSGjb4pOavkLeLuUsvEWL8DVo/wo2+cY8ykx\ncUdzM+4j9c45RB36l1qVKvmBh1sRn6Co8bE+tS3F60FwdeA2WaFM8Qs6sQKBgB3i\ngwGIhjjMgJQ2meKXDsbnc7Lr++VDqYquo3BjYrdsLkxuiwo282yWf58oKy9LB07x\n8Ywh2m4bJAQ8ACGnMBB4CBfXF0M6IbtDt+fb0a/PV/KhRP1OinAbE2q20PjJbF8a\nrYYr0npQHn051q1pJgXHKIskvvTJcRKZ5mbfxNyDAoGASm6j+Usoqv10TmdNL4XB\neVkl1DcjCDDk1wJRS6vRyiDOSZOODqZqeE2+Fzp15KW3iHBfgMp0+NZD6RQba6oK\npkkYuBKnZn6yBmZl+dv/h7C9kIRaFZVeAwFtPXZ10yOtem2KZ4RAcaH+qDQ6z2JZ\nSxPc/zp3L5a7Y0HWoifO0tE=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-49ihw@blog-89278.iam.gserviceaccount.com",
  "client_id": "105678694985197456301",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-49ihw%40blog-89278.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'blog-89278.appspot.com',
});

// Initialize Firebase Storage
export const storage = admin.storage().bucket();