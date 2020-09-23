function greet(firstName, lastName, delay, success, failure) {
  setTimeout(() => {
    if (!!firstName && !!lastName) {
      failure()
    }

    success()
    console.log(`Hi ${firstName} ${lastName}`);
    setTimeout(() => {
      if (!!firstName && !!lastName) {
        failure()
      }

      success()
      console.log(`Hi ${firstName} ${lastName}`);

      setTimeout(() => {
        if (!!firstName && !!lastName) {
          failure()
        }

        success()
        console.log(`Hi ${firstName} ${lastName}`);

        setTimeout(() => {
          if (!!firstName && !!lastName) {
            failure()
          }

          success()
          console.log(`Hi ${firstName} ${lastName}`);

          setTimeout(() => {
            if (!!firstName && !!lastName) {
              failure()
            }

            success()
            console.log(`Hi ${firstName} ${lastName}`);
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  }, delay)
}

/* This is called callback hell when we nest calback inside another one. This method will get messy and very dirt code by the time */