import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { max } from 'rxjs/operators';

map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`Output is: ${v}`));

let list1 = [1, 6, 15, 10, 58, 2, 40];
from(list1)
    .pipe(max((a, b) => a - b))
    .subscribe(x => console.log("The max value is " + x)
    );