export const isValidUrl = (url: string, platform: string) => {
  const regexURL =
    /^(https:\/\/|http:\/\/)[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/|http:\/\/)[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/|http:\/\/)[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/;

  if (platform === 'Twitter') {
    // Formerly Twitter, now X //
    const regexX = /^https:\/\/(www\.)?x\.com\/[A-Za-z0-9_]{1,15}$/;
    return regexX.test(url);
  }

  return regexURL.test(url) && url.includes(platform.split('-').join('').toLowerCase());
};
