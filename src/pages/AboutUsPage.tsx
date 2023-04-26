import React from "react";
import Layout from "../hocs/Layout";
import CategoryHeader from "../components/CategoryHeader";
import Parteners from "../components/Parteners";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <Layout>
      <CategoryHeader imgPath="/images/aboutus-img.png" title="من نحن" />
      <div className="container" style={{ padding: "3rem 2rem" }}>
        <h1
          className="fw-600 fs-40 text-primary-600 text-right"
          style={{ paddingBlock: "3rem" }}
        >
          مساعدة الانسان..مهمتنا الأساسية
        </h1>
        <section className="w-100 box-shadow" style={{ padding: "2rem" }}>
          <p className="text-black text-right" style={{ lineHeight: "1.5" }}>
            <span className="fw-500 fs-20">كيف تحسب زكاتك؟</span>الزكاة هي أحد
            أركان الإسلام الخمسة ، واجبة على جميع المسلمين الذين يتقيدون بقيم
            النصاب . النصاب هو الحد الأدنى لصافي رأس المال الذي يجب أن يمتلكه
            المسلم حتى يكون مؤهلاً لدفع الزكاة ، وهو ما يعادل 87.48 جرامًا (7.5
            تولة) من الذهب و 612.36 جرامًا (52.5 تولة) من الفضة على التوالي.
            فيجب عليه دفع 2.5٪ من تلك الثروة كزكاة سنوياً ، ويجب حساب المبلغ قبل
            التبرع بيوم علي الاكثر.
          </p>
          <p
            className="text-right text-primary-600 fw-500 fs-20"
            style={{ padding: "1rem" }}
          >
            <span>نقرأ في سورة البقرة</span>
            <br />
            <span>
              "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَمَا تُقَدِّمُوا
              لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ الله إِنَّ الله بِمَا
              تَعْمَلُونَ بَصِيرٌ"
            </span>
          </p>

          <p className="text-black text-right" style={{ lineHeight: "1.5" }}>
            <span className="text-secondary-700 fs-20 fw-500">
              خَـــيِّـــرْ
            </span>{" "}
            يقدم حاسبة الزكاة ، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة
            المال أو المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وبعد ذلك يظهر لك
            قيمة الزكاة الخاصة بها. يرجى التواصل مع جهة أو دار فتوى شرعية حتى
            تتحقق من شروط وضوابط الزكاة الواجبة.
          </p>
        </section>
      </div>
      <Parteners />
    </Layout>
  );
};

export default AboutUsPage;
