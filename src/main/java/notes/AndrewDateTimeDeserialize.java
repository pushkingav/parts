package notes;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class AndrewDateTimeDeserialize extends JsonDeserializer<Date> {
  //available formats: "yyyy-MM-dd'T'HH:mm:ss.SSSZ", "yyyy-MM-dd'T'HH:mm:ss.SSS", "EEE, dd MMM yyyy HH:mm:ss zzz", "yyyy-MM-dd" - date Formats
  private SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

  @Override
  public Date deserialize(JsonParser jsonParser,
                          DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
    String str = jsonParser.getText().trim();
    try {
      return format.parse(str);
    } catch (ParseException e) {
      // Handle exception here
    }
    return deserializationContext.parseDate(str);
  }
}
