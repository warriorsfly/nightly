export class Book {

    /// ID
    public id: number;
    public authors: string[];
    public slug: string;
    /// 名称
    public name: string;
    /// 封面图片
    public cover: string;
    /// 描述
    public description: string;
    /// 标签
    public tags: string[];
    public day_of_week: number;
    /// 喜爱数量
    public favorites_count: number;
    public completed: boolean;
    /// 创建时间
    public created_at: Date;
    /// 更新时间
    public updated_at: Date;

}
// class Book {

// }