async function getStories() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/stories/records?page1',
        { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default async function Stories() {
    const stories = await getStories();
    return (
        <div>
            <h1 className="bg-zinc-500">Stories</h1>
            <div>
                {stories?.map((story) => {
                    return (
                        <Story key={story.id} story={story} />
                    )
                }

                )}
            </div>
        </div>
    );
}

function Story({ story }: { story: any }) {
    return (
        <div>
            <p>{story.story}</p>
        </div>
    );
}

