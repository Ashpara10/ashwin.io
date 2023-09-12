import { createClient } from "@supabase/supabase-js";

const store =createClient("https://tlmqykwpyotjzabwpeky.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsbXF5a3dweW90anphYndwZWt5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDM0NDQzOSwiZXhwIjoyMDA5OTIwNDM5fQ.YWdKdGdK0VbRAZPLAFg9sXkkgdbaRb-LRGI3jVw5-64",{auth:{persistSession:false}})
export default store
