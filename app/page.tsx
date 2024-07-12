import Head from "next/head";
import ImageUpload from "../components/ImageUpload";

export default function Home() {
    return (
        <div>
            <Head>
                <title>AI Table Reader</title>
                <meta
                    name="description"
                    content="Extract table data from images using AI"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{ padding: "20px" }}>
                <h1>Welcome to AI Table Reader</h1>
                <ImageUpload />
            </main>
        </div>
    );
}
