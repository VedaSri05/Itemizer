import { supabase } from "./supabaseClient";

export const fetchData = async (page, searchTerm, setItems, sortOption) => {
  const itemsPerPage = 5; // Number of items per page
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from("items")
    .select("*")
    .order(sortOption, { ascending: true })
    .range(from, to);

  if (searchTerm) {
    query = query.ilike("name", `%${searchTerm}%`);
  }

  try {
    const { data, error } = await query;

    if (error) throw error;

    setItems(data || []);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    alert("An error occurred while fetching data. Please try again later.");
  }
};
