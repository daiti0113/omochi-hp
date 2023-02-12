import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

// TODO: 両サイドの余白を合わせる

// eslint-disable-next-line max-lines-per-function
export const Steps = () => {
    return (
        <SectionContainer>
            <Headline>制作の流れ</Headline>
            <div className="mt-12 md:mt-20">
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <span className="text-2xl">1</span>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">1</span> - Idea</div>
                                <div className="p-3 text-2xl">お問い合わせ</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">「ホームページを作ってみたいな」と思ったら、お問合せフォームよりお気軽にご連絡ください。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">2</div>
                            </div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">2</span> - Collaboration</div>
                                <div className="p-3 text-2xl">ご要望のヒアリング</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">ホームページを作れば必ずしも効果が出るわけでありません。</span>
                                    <span className="inline-block leading-normal">事業のターゲットや市場の状況によっては、SNSやポスティングなど別のマーケ施策を行ったほうが効果が出る可能性もあります。</span>
                                    <span className="inline-block leading-normal">そこで、Omochi ではホームページを作りたいと思ったきっかけや、事業概要などをお伺いさせていただきます。</span>
                                    <span className="inline-block leading-normal">対面・オンラインどちらでも可能です。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row-reverse">
                    <div className="border-t-4 border-l-4 border-transparent">
                        <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">3</div>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">3</span> - Planification</div>
                                <div className="p-3 text-2xl">ご提案・お申し込み</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">お伺いした情報をもとに、目的にあったプランをご提案します。</span>
                                    <span className="inline-block leading-normal">提案後、すぐにお申し込みを行う必要はありません。</span>
                                    <span className="inline-block leading-normal">ぜひ提案したプランをもとに他社様と比較していただき、</span>
                                    <span className="inline-block leading-normal">ご納得いただいた際に、改めてご連絡いただければと思います。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">4</div>
                            </div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">2</span> - Collaboration</div>
                                <div className="p-3 text-2xl">構成やデザインのヒアリング</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">ご希望のデザインやホームページの構成をお伺いします。</span>
                                    <span className="inline-block leading-normal">サンプルのデザインや構成も用意しているので、まだイメージが固まっていなくても安心してお任せください。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row-reverse">
                    <div className="border-t-4 border-l-4 border-transparent">
                        <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">5</div>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">3</span> - Planification</div>
                                <div className="p-3 text-2xl">レイアウトの制作</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">お伺いした情報をもとに、サンプルの文章や画像を使ってサイトのレイアウトを作成します。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">6</div>
                            </div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">2</span> - Collaboration</div>
                                <div className="p-3 text-2xl">文章や画像の流し込み</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">レイアウトをご確認いただいたあと問題がなければ、お客様のほうで画像や文章等をご用意いただき、それらの流し込みと調整を行います。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row-reverse">
                    <div className="border-t-4 border-l-4 border-transparent">
                        <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">7</div>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">3</span> - Planification</div>
                                <div className="p-3 text-2xl">ホームページの公開・運用</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">ホームページを公開し、運用がスタートします。</span>
                                    <span className="inline-block leading-normal">このタイミングから運用代行費をいただきます。</span>
                                    <span className="inline-block leading-normal">修正・変更やブログ記事の追加などの際は、お気軽にご連絡ください。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">8</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">4</span> - Implementation</div>
                                <div className="p-3 text-2xl">SEOレポートの作成、状況のヒアリング</div>
                                <div className="px-3 pb-6 text-gray-500">
                                    <span className="inline-block leading-normal">月に一度、ホームページにアクセスしたユーザー数や、検索キーワード、</span>
                                    <span className="inline-block leading-normal">検索順位などの情報をレポートにまとめてご報告いたします。</span>
                                    <span className="inline-block leading-normal">また、プラン変更や解約等のご希望もあわせてご確認させていただければと思います。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}