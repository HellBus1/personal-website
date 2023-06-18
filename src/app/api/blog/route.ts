import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  limit,
} from "firebase/firestore";
import firebaseApp from "@/app/lib/firebase";
import { NextResponse } from "next/server";
import { FirebaseError } from "firebase/app";

const db = getFirestore(firebaseApp);

export async function GET(request: Request) {
  try {
    /**
     * 1. Featured posts : 4 newest medium posts
     * 2. Posts : all medium posts, you can search it and filter it by tags
     */
    const { searchParams } = new URL(request.url)

    const count = searchParams.get('limit');
    const tag = searchParams.get('tag');
    const createdAt = searchParams.get('createdAt');

    const collectionRef = collection(db, "blogs");
    let q = query(collectionRef);

    // Filter by tag
    if (tag) {
      q = query(collectionRef, where("tags", "array-contains", tag));
    }

    // Limit the result
    if (count) {
      console.log(count)
      q = query(collectionRef, limit(parseInt(count, 10)));
    }

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ status: "success", data }, { status: 200 });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json(
        { status: "error", message: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { status: "error", message: "An unknown error occurred." },
        { status: 500 }
      );
    }
  }
}
