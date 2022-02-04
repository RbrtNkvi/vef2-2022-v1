import { max, mean, median, min, std, sum, variance } from 'mathjs';

export function calculate(data) {

  if (data.length !== 0) {
    const Frávik = variance(data);
    const Hæstagildi = max(data);
    const Meðaltal = mean(data);
    const Miðgildi = median(data);
    const Minnstagildi = min(data);
    const StaðalFrávik = std(data);
    const Summa = sum(data);
    const Svið = Hæstagildi - Minnstagildi;

    const stats = {
      Frávik,
      Hæstagildi,
      Meðaltal,
      Miðgildi,
      Minnstagildi,
      StaðalFrávik,
      Summa,
      Svið
    };

    return stats;
  }
  return null;
}
