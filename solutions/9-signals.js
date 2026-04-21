import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
export default function getFreeDomainsStats(emails) {
  return emails.reduce((stats, email) => {
    const domain = email.split('@')[1];
    
    if (freeEmailDomains.includes(domain)) {
      stats[domain] = (stats[domain] || 0) + 1;
    }
    
    return stats;
  }, {});
}
// END