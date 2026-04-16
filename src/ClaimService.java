public class ClaimService {

    public int calculateAmount(int base, int tax) {
        if (base < 0) {
            throw new IllegalArgumentException("Base cannot be negative");
        }
        return base + tax;
    }
}