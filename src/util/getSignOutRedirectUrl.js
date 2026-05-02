export default async function getSignOutRedirectUrl(req) {
    const { searchParams } = new URL(req.url);
    const passedRedirect = searchParams.get('redirect') || '/';
    
    // Logic to resolve the environment-based URL
    const isDev = process.env.NODE_ENV === 'development';
    const redirectBase = isDev ? "http://localhost:3012" : "https://accounts.articles.media";
    
    return `${redirectBase}/api/signout?redirect=${encodeURIComponent(passedRedirect)}`;
}