import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  
} from "@material-ui/pickers";

function DatepickerField(props) {
  const onHandleDatePickerChange = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const today = new Date();
// console.log("TODAY'S DATE", today);
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            format="yyyy/MM/dd"
            margin="normal"
            name={props.name}
            id="date-picker-dialog"
            className={props.className}
            label={props.label}
            value={props.value}
            onChange={(date) =>
              props.onchange(onHandleDatePickerChange(props.name, date))
            }
            
            minDate={today.setDate(today.getDate())}  
          
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DatepickerField;
