const API_KEY   = "9c8569eb29d07e9f4b3819310d"; //for public content only
const API_URL   = "https://hecked-blog.herokuapp.com/ghost/api/v3/content";
const KEY       = `key=${API_KEY}`

export async function getPosts(limit, page) {
    try {
        const response = await fetch(`${API_URL}/posts/?${KEY}&` +
            `fields=id,title,slug,custom_excerpt,reading_time,feature_image,`+
            `created_at,updated_at,published_at,meta&include=tags&limit=${limit}&page=${page}`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getArchivePosts() {
    try {
        const response = await fetch(`${API_URL}/posts/?${KEY}&` +
            `fields=id,title,slug,published_at,tags.id&limit=all`);
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getPost(slug) {
    try {
        const response = await fetch(`${API_URL}/posts/slug/${slug}?${KEY}&` +
            "fields=id,title,slug,html,reading_time,feature_image,created_at,updated_at,published_at");
        const body = await response.json();
        return body.posts[0];
    } catch (error) {
        return [];
    }
}

export async function getSettings() {
    try {
        const response = await fetch(`${API_URL}/settings/?${KEY}`);
        const body = await response.json();
        return body;
    } catch (error) {
        return [];
    }
}

export async function getTags() {
    try {
        const response = await fetch(`${API_URL}/tags/?${KEY}&&` +
        `include=count.posts&limit=20&filter=visibility:public`);
        const body = await response.json();
        return body;
    } catch (error) {
        return [];
    }
}