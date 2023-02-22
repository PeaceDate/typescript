/*
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
*/
interface Response {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    statusMessage?: QuestionStatus;
}

enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted',
}

async function getFaqs(req: {
    topicId: number;
    status?: QuestionStatus;
}): Promise<Response[]> {
    const res: Response = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: Response[]  = await res.json();
    return data;
}
