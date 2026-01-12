import { supabase } from "../../lib/supabase";

export async function FetchData() {
  let { data, error } = await supabase
  .from('orange_pick_room')
  .select('*');
  return data;

  console.log(data);
  console.log(error);
}

export async function setPlayerAmount(count, roomId) {
  const { error } = await supabase
  .from('orange_pick_room')
  .update({ player_amount: count })
  .eq('id', roomId);
  console.log(error);
}