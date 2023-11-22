import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";

export default function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBooks();
        if (response?.books) {
          setBooks(response.books);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <VStack w="100%">
      {books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}
