export abstract class BaseDiscordService {
    public abstract enableRichPresence(): void;
    public abstract disableRichPresence(): void;
    public abstract initialize(): void;
}
