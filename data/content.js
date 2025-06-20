const content = {
    ar: {
        siteName: "مملكة وداي",
        navigation: {
            mission: "مهمتنا",
            vision: "رؤيتنا",
            goals: "أهدافنا",
            language: "اللغة",
            landscape: "التضاريس",
            history: "التاريخ",
            places: "الأماكن",
            spaces: "الفضاءات",
            society: "المجتمع",
            politics: "السياسة والعسكرية",
            economy: "الاقتصاد",
            socialLife: "الحياة الاجتماعية والإنسانية",
            publications: "المنشورات",
            gallery: "معرض الصور",
            map: "الخريطة",
            video: "الفيديو",
            shop: "المتجر",
            news: "الأخبار",
            events: "الفعاليات",
            donate: "التبرع",
            ancientHistory: "التاريخ القديم",
            cultureHeritage: "الثقافة والتراث الطبيعي",
            intangibleHeritage: "التراث الثقافي اللامادي"
        },
        sections: {
            mission: {
                title: '<i class="fas fa-bullseye"></i> مهمتنا',
                content: "الحفاظ على تراث وتاريخ مملكة وداي ونشر ثقافتها الغنية للأجيال القادمة."
            },
            vision: {
                title: '<i class="fas fa-eye"></i> رؤيتنا',
                content: "أن نكون المصدر الرئيسي للمعرفة عن تاريخ وثقافة مملكة وداي."
            },
            goals: {
                title: '<i class="fas fa-target"></i> أهدافنا',
                content: `
                    <div class="goals-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book-open fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">التوثيق والحفظ</h5>
                                        <p class="card-text">توثيق وحفظ التراث الثقافي والتاريخي لمملكة وداي من خلال البحث والتسجيل المنهجي للمواد التراثية.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">التعليم والتوعية</h5>
                                        <p class="card-text">نشر الوعي بتاريخ وثقافة مملكة وداي من خلال البرامج التعليمية والورش التراثية للمجتمع.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">التواصل الدولي</h5>
                                        <p class="card-text">بناء شراكات مع المؤسسات الأكاديمية والثقافية دولياً لتعزيز فهم تراث وداي عالمياً.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hands-helping fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">دعم المجتمع المحلي</h5>
                                        <p class="card-text">تقوية الهوية الثقافية للمجتمعات المحلية ودعم الحرفيين والرواة في الحفاظ على التقاليد الأصيلة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            history: {
                title: '<i class="fas fa-landmark"></i> التاريخ',
                content: `
                    <div class="history-overview mb-4">
                        <div class="alert alert-info">
                            <h4><i class="fas fa-crown me-2"></i>نظرة عامة تاريخية</h4>
                            <p>تأسست مملكة وداي (أو أوادي) حوالي عام 1635م على يد السلطان عبد الكريم، وازدهرت لأكثر من ثلاثة قرون كواحدة من أهم الممالك الإسلامية في وسط أفريقيا، تقع في ما يُعرف اليوم بشرق تشاد.</p>
                        </div>
                    </div>

                    <div class="history-periods">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 history-card founding-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">فترة التأسيس (1635-1678)</h5>
                                        <p class="card-text">
                                            <strong>السلطان عبد الكريم (1635-1678):</strong><br>
                                            - مؤسس المملكة ومنظم هيكلها السياسي<br>
                                            - بناء العاصمة الأولى في وارا<br>
                                            - تأسيس النظام الإداري والعسكري<br>
                                            - نشر الإسلام في المنطقة
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card expansion-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">فترة التوسع (1678-1803)</h5>
                                        <p class="card-text">
                                            <strong>السلطان يعقوب عارف (1681-1707):</strong><br>
                                            - توسيع حدود المملكة شرقاً وجنوباً<br>
                                            - تطوير التجارة عبر الصحراء<br>
                                            <strong>السلطان محمد شريف (1803-1813):</strong><br>
                                            - ذروة القوة العسكرية والسياسية
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card golden-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">العصر الذهبي (1803-1874)</h5>
                                        <p class="card-text">
                                            <strong>السلطان محمد شريف:</strong><br>
                                            - نقل العاصمة إلى أبيشي<br>
                                            - ازدهار التجارة والثقافة<br>
                                            - بناء المساجد والمدارس القرآنية<br>
                                            - تطوير الحرف والصناعات
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card resistance-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">فترة المقاومة (1874-1912)</h5>
                                        <p class="card-text">
                                            <strong>السلطان يوسف (1874-1898):</strong><br>
                                            - مقاومة الغزو الفرنسي<br>
                                            - الدفاع عن استقلال المملكة<br>
                                            - معارك ضارية ضد القوات الاستعمارية<br>
                                            - سقوط المملكة عام 1912
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card rulers-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-users-crown fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">أشهر الحكام</h5>
                                        <p class="card-text">
                                            - السلطان عبد الكريم (المؤسس)<br>
                                            - السلطان يعقوب عارف<br>
                                            - السلطان محمد شريف<br>
                                            - السلطان علي دينار<br>
                                            - السلطان يوسف (الأخير)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card legacy-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">الإرث التاريخي</h5>
                                        <p class="card-text">
                                            - الأثار المعمارية في وارا وأبيشي<br>
                                            - التراث الثقافي والديني<br>
                                            - النظم الإدارية والقانونية<br>
                                            - اللغة والأدب المحلي<br>
                                            - التقاليد والعادات الاجتماعية
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="historical-timeline mt-5">
                        <h4><i class="fas fa-clock me-2"></i>الخط الزمني الرئيسي</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-date">1635</div>
                                <div class="timeline-content">تأسيس مملكة وداي على يد السلطان عبد الكريم</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1681</div>
                                <div class="timeline-content">بداية حكم السلطان يعقوب عارف وفترة التوسع</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1803</div>
                                <div class="timeline-content">السلطان محمد شريف ينقل العاصمة إلى أبيشي</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1874</div>
                                <div class="timeline-content">بداية المقاومة ضد التوسع الاستعماري الفرنسي</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1912</div>
                                <div class="timeline-content">سقوط آخر سلاطين وداي وانتهاء الحكم المستقل</div>
                            </div>
                        </div>
                    </div>
                `
            },
            society: {
                title: '<i class="fas fa-users"></i> المجتمع',
                content: `<ul class="tribes-list">
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> المابا</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> قبائل السارا</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> قبائل الكانمبو</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> قبائل التوبو</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> القبائل العربية</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> قبائل الدازا</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> الهجراي</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> المبورورو (مجموعة فرعية من الفولاني)</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> مايو-كبي</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> كانم-برنو</li>
                </ul>`
            },

            landscape: {
                title: '<i class="fas fa-mountain"></i> التضاريس',
                content: `
                    <div class="places-spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <a href="#places" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-map-marker-alt fa-3x mb-3 text-primary"></i>
                                            <h5 class="card-title">الأماكن</h5>
                                            <p class="card-text">المواقع الجغرافية والمعالم المحددة في مملكة وداي</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="#spaces" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-success"></i>
                                            <h5 class="card-title">الفضاءات</h5>
                                            <p class="card-text">المساحات الواسعة والبيئات الطبيعية المتنوعة</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                `
            },

            language: {
                title: '<i class="fas fa-language"></i> اللغة',
                content: `
                    <p>اللغة الرئيسية في وداي هي المابا، وهي لغة من عائلة اللغات النيلية الصحراوية. كما تنتشر اللغة العربية التشادية كلغة للتجارة والتواصل. توجد لهجات متعددة مثل لهجات المساليت والتاما. تستخدم الكتابة العربية تقليدياً في الوثائق الرسمية والدينية.</p>
                    
                    <div class="language-resources mt-4">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">مابا-بورا مابانغ</h5>
                                        <p class="card-text">الكتاب الأساسي لتعلم لغة المابا</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">تعلم مابا-بورا مابانغ</h5>
                                        <p class="card-text">دروس تفاعلية لتعلم اللغة</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-toolbox fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">حقيبة التعلم</h5>
                                        <p class="card-text">أدوات ومواد تعليمية شاملة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            politics: {
                title: '<i class="fas fa-balance-scale"></i> السياسة والعسكرية',
                content: `
                    <div class="politics-military-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 politics-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">التاريخ السياسي</h5>
                                        <p class="card-text">تميز النظام السياسي في وداي بالملكية الوراثية، حيث حكم السلاطين بمساعدة مجلس استشاري. من أشهر الحكام السلطان عبد الكريم صابون والسلطان محمد شريف. عقدت المملكة تحالفات مهمة مع السلطنات المجاورة.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 military-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">الجوانب العسكرية</h5>
                                        <p class="card-text">كان الجيش قوياً ومنظماً، مع فرق متخصصة للمشاة والفرسان. تميزت القوات العسكرية بالتدريب الجيد والتنظيم المحكم، وكانت تلعب دوراً مهماً في حماية المملكة والحفاظ على حدودها.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            economy: {
                title: '<i class="fas fa-coins"></i> الاقتصاد',
                content: `
                    <div class="economy-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-trade-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-route fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">التجارة القديمة</h5>
                                        <p class="card-text">اعتمد اقتصاد وداي على التجارة عبر الصحراء، خاصة مع مصر والسودان. كانت المملكة مركزاً مهماً لتجارة العاج والريش والجلود. استخدمت عملات مختلفة للتجارة، بما في ذلك الودع والقطع المعدنية.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 modern-economic-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-chart-line fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">الاتجاهات الاقتصادية الحديثة</h5>
                                        <p class="card-text">تحولت الأنشطة الاقتصادية لتشمل الزراعة الحديثة وتربية الماشية والتعدين. تطورت البنية التحتية والتجارة المحلية، مع التركيز على التنمية المستدامة والحفاظ على الموارد الطبيعية للأجيال القادمة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            socialLife: {
                title: '<i class="fas fa-users-cog"></i> الحياة الاجتماعية والإنسانية',
                content: `
                    <div class="social-life-grid">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 education-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">التعليم</h5>
                                        <p class="card-text">نظام التعليم في وداي يشمل المدارس القرآنية التقليدية والتعليم الحديث. يركز على تعلم القرآن الكريم واللغة العربية، بالإضافة إلى المهارات الحرفية والتجارية الأساسية.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 transformation-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-exchange-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">التحول الاجتماعي</h5>
                                        <p class="card-text">شهدت المجتمعات في وداي تطوراً تدريجياً في البنية الاجتماعية، مع الحفاظ على التقاليد والقيم الأساسية. تطورت أنماط الحياة والعلاقات الاجتماعية مع مرور الزمن.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 women-youth-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-female fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">المرأة والشباب</h5>
                                        <p class="card-text">تلعب المرأة دوراً مهماً في المجتمع الوداي، خاصة في التجارة والحرف اليدوية. الشباب يمثلون القوة المحركة للتنمية والحفاظ على التراث الثقافي.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            publications: {
                title: '<i class="fas fa-book"></i> المنشورات',
                content: `<p>مجموعة متنوعة من المنشورات حول تاريخ وثقافة مملكة وداي:</p>
                <ul>
                    <li><i class="fas fa-scroll"></i> وثائق تاريخية من العصر الملكي</li>
                    <li><i class="fas fa-file-alt"></i> أوراق بحثية عن التراث الثقافي</li>
                    <li><i class="fas fa-book-open"></i> كتب ومقالات عن تاريخ المملكة</li>
                    <li><i class="fas fa-graduation-cap"></i> دراسات أكاديمية عن المجتمع والثقافة</li>
                </ul>`,
                items: []
            },
            news: {
                title: '<i class="fas fa-newspaper"></i> الأخبار',
                content: `<p>آخر التحديثات والأخبار:</p>
                <ul>
                    <li><i class="fas fa-search"></i> اكتشافات تاريخية جديدة</li>
                    <li><i class="fas fa-flask"></i> نتائج البحوث الحديثة</li>
                    <li><i class="fas fa-users"></i> أخبار المجتمع والفعاليات</li>
                    <li><i class="fas fa-project-diagram"></i> تطورات المشاريع الثقافية</li>
                </ul>`,
                items: []
            },
            events: {
                title: '<i class="fas fa-calendar-alt"></i> الفعاليات',
                content: `<p>الفعاليات القادمة والسابقة:</p>
                <ul>
                    <li><i class="fas fa-chalkboard-teacher"></i> المؤتمرات الأكاديمية</li>
                    <li><i class="fas fa-music"></i> الاحتفالات الثقافية</li>
                    <li><i class="fas fa-palette"></i> المعارض التاريخية</li>
                    <li><i class="fas fa-tools"></i> ورش العمل التراثية</li>
                </ul>`,
                items: []
            },
            donate: {
                title: '<i class="fas fa-hand-holding-heart"></i> تبرع',
                content: `
                    <div class="donation-info">
                        <p>من أجل الشفافية والنزاهة، سيتم قريباً فتح حساب رسمي باسم المنظمة لجميع الراغبين في التبرع. نقدر دعمكم وتعاونكم.</p>
                        <div class="bank-transfer">
                            <h3><i class="fas fa-university"></i> التحويل البنكي</h3>
                            <p>سيتم إضافة معلومات الحساب البنكي قريباً</p>
                        </div>
                    </div>
                `
            },
            map: {
                title: '<i class="fas fa-map-marked-alt"></i> الخريطة',
                content: `
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d20.8114851!3d13.8287529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11314472a60a8319%3A0xf2526dfd44b27605!2sAb%C3%A9ch%C3%A9%2C%20Chad!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                `
            },
            video: {
                title: '<i class="fas fa-video"></i> الفيديو',
                content: `
                    <div class="video-section">
                        <div class="video-grid">
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/A.mp4" type="video/mp4">
                                    <source src="videos/A.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">الفيديو الأول</h3>
                                        <p class="video-description">محتوى تعليمي عن مملكة وداي</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/B.mp4" type="video/mp4">
                                    <source src="videos/B.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">الفيديو الثاني</h3>
                                        <p class="video-description">تاريخ وثقافة المملكة</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/C.mp4" type="video/mp4">
                                    <source src="videos/C.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">الفيديو الثالث</h3>
                                        <p class="video-description">المعالم والتراث</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            ancientHistory: {
                title: '<i class="fas fa-history"></i> التاريخ القديم',
                content: `
                    <div class="ancient-history-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-palace fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">مملكة وداي</h5>
                                        <p class="card-text">المملكة العظيمة وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">تنجور داجو</h5>
                                        <p class="card-text">المملكة القديمة التي سبقت وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">حضارة الساو</h5>
                                        <p class="card-text">الحضارة القديمة في منطقة بحيرة تشاد</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-castle fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">مملكة كانم-برنو</h5>
                                        <p class="card-text">إمبراطورية قوية في وسط أفريقيا</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">مملكة باقرمي</h5>
                                        <p class="card-text">مملكة تاريخية في حوض تشاد</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            cultureHeritage: {
                title: '<i class="fas fa-landmark"></i> الثقافة والتراث الطبيعي',
                content: `
                    <div class="culture-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-history fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">فترة ماقبل التاريخ</h5>
                                        <p class="card-text">استكشاف الحقب التاريخية القديمة في منطقة وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">التراث الثقافي الأثري</h5>
                                        <p class="card-text">المواقع والآثار التاريخية المهمة في المنطقة</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">التراث الثقافي الطبيعي</h5>
                                        <p class="card-text">المناظر الطبيعية والبيئة الفريدة في وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">مواقع اليونسكو للتراث العالمي</h5>
                                        <p class="card-text">المواقع المسجلة في قائمة التراث العالمي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-list-alt fa-3x mb-3 text-secondary"></i>
                                        <h5 class="card-title">قائمة اليونسكو التمهيدية للتراث العالمي</h5>
                                        <p class="card-text">المواقع المرشحة للانضمام لقائمة التراث العالمي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-city fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">آثار مدينة وارة</h5>
                                        <p class="card-text">الآثار والبقايا التاريخية لمدينة وارة القديمة</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-dark"></i>
                                        <h5 class="card-title">حماية وصون التراث</h5>
                                        <p class="card-text">جهود حماية وحفظ التراث الثقافي والطبيعي</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            intangibleHeritage: {
                title: '<i class="fas fa-music"></i> التراث الثقافي اللامادي',
                content: `
                    <div class="intangible-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-comments fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">التقاليد وأشكال التعبير الشفهي</h5>
                                        <p class="card-text">التقاليد وأشكال التعبير الشفهي بما في ذلك اللغة كواسطة للتعبير عن التراث الثقافي غير المادي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-theater-masks fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">فنون وتقاليد أداء العروض</h5>
                                        <p class="card-text">فنون وتقاليد أداء العروض في مملكة وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-calendar-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">الممارسات الاجتماعية والطقوس والاحتفالات</h5>
                                        <p class="card-text">الممارسات الاجتماعية والطقوس والاحتفالات في التراث الوداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">المعارف والممارسات المتعلقة بالطبيعة والكون</h5>
                                        <p class="card-text">المعارف والممارسات المتعلقة بالطبيعة والكون في مملكة وداي</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hammer fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">المهارات المرتبطة بالفنون الحرفية التقليدية</h5>
                                        <p class="card-text">المهارات المرتبطة بالفنون الحرفية التقليدية والموروثة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },

            places: {
                title: '<i class="fas fa-map-marker-alt"></i> الأماكن',
                content: `
                    <div class="places-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mountain fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">جبال وداي الشرقية</h5>
                                        <p class="card-text">سلسلة جبلية تمتد عبر المنطقة الشرقية، تشكل حاجزاً طبيعياً وتؤثر على المناخ المحلي. تحتوي على تنوع بيولوجي فريد وتعتبر موطناً للنباتات والحيوانات النادرة.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-water fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">نهر بطحاء والوديان</h5>
                                        <p class="card-text">شريان الحياة الرئيسي في منطقة وداي، يوفر المياه للزراعة والشرب. تتخلل المنطقة وديان خصبة تدعم الحياة الزراعية والرعوية وتشكل النظام البيئي الأساسي.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mosque fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">المساجد والمقامات</h5>
                                        <p class="card-text">تضم المنطقة مساجد تاريخية مهمة مثل مسجد أبشي الكبير ومسجد وارة القديم، بالإضافة إلى مقامات الأولياء والعلماء التي تعكس التراث الإسلامي العريق.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">آثار وارة التاريخية</h5>
                                        <p class="card-text">أطلال قصر السلطان عبد الكريم بن جامع من القرن السادس عشر، محاطة بسور يبلغ قطره 325 متراً. تشمل برج مراقبة عالي وقاعة المجلس ومساكن الأمراء.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            spaces: {
                title: '<i class="fas fa-expand-arrows-alt"></i> الفضاءات',
                content: `
                    <div class="spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-sun fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">الصحراء وهضبة إنيدي</h5>
                                        <p class="card-text">تمتد المناطق الصحراوية في الشمال حيث تلتقي مع الصحراء الكبرى. تضم هضبة إنيدي الرملية بتشكيلاتها الصخرية المذهلة والواحات الخضراء النادرة مثل واحة أرشي وتوكو، التي توفر المياه والحياة في قلب الصحراء.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">السهول والسافانا</h5>
                                        <p class="card-text">تنتشر في الجنوب سهول السافانا الخصبة التي تدعم الزراعة وتربية الماشية. هذه المناطق تتميز بهطول أمطار أكثر وتربة خصبة، مما يجعلها مناسبة لزراعة الذرة والدخن وتربية الأبقار والماعز.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            gallery: {
                title: '<i class="fas fa-images"></i> معرض الصور',
                content: `
                    <div class="gallery-container">
                        <div class="gallery-grid">
                            <div class="gallery-item" data-image="images/img_1_1748690905993.jpg">
                                <img src="images/img_1_1748690905993.jpg" alt="Kingdom of Waddai Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Kingdom of Waddai Heritage</h3>
                                    <p>Distinguished historical and cultural sites</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_2_1748690929995.jpg">
                                <img src="images/img_2_1748690929995.jpg" alt="Traditional Life" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-home"></i> Traditional Life</h3>
                                    <p>Authentic way of life in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_3_1748690940840.jpg">
                                <img src="images/img_3_1748690940840.jpg" alt="Natural Landscapes" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-mountain"></i> Natural Landscapes</h3>
                                    <p>Natural beauty of the Waddai region</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_4_1748690950427.jpg">
                                <img src="images/img_4_1748690950427.jpg" alt="Architectural Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-building"></i> Architectural Heritage</h3>
                                    <p>Traditional architecture and local construction</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_5_1748690957893.jpg">
                                <img src="images/img_5_1748690957893.jpg" alt="Traditional Crafts" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-tools"></i> Traditional Crafts</h3>
                                    <p>Inherited skills and artisan crafts</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_6_1748690973649.jpg">
                                <img src="images/img_6_1748690973649.jpg" alt="Community and Culture" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-users"></i> Community and Culture</h3>
                                    <p>Social life and cultural traditions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_7_1748691005093.jpg">
                                <img src="images/img_7_1748691005093.jpg" alt="Heritage Events" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-calendar-alt"></i> Heritage Events</h3>
                                    <p>Traditional celebrations and occasions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_8_1748691019000.jpg">
                                <img src="images/img_8_1748691019000.jpg" alt="Historical Monuments" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-landmark"></i> Historical Monuments</h3>
                                    <p>Ancient landmarks and monuments in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg">
                                <img src="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg" alt="Kingdom of Waddai" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Kingdom of Waddai</h3>
                                    <p>Grandeur of history and heritage</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/bag.jpg">
                                <img src="images/bag.jpg" alt="Traditional Tools" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-shopping-bag"></i> Traditional Tools</h3>
                                    <p>Heritage tools and traditional craftsmanship</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/david-karp-EJIFu_veczw-unsplash.jpg">
                                <img src="images/david-karp-EJIFu_veczw-unsplash.jpg" alt="Cultural Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-book"></i> Cultural Heritage</h3>
                                    <p>Preserving our rich traditions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/hhh.jpg">
                                <img src="images/hhh.jpg" alt="Natural Beauty" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-leaf"></i> Natural Beauty</h3>
                                    <p>Spectacular natural landscapes of Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/michael-bourgault-aHetdmuNoO4-unsplash.jpg">
                                <img src="images/michael-bourgault-aHetdmuNoO4-unsplash.jpg" alt="Historical Sites" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-landmark"></i> Historical Sites</h3>
                                    <p>Ancient ruins and artifacts</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-andyhvu-3244513.jpg">
                                <img src="images/pexels-andyhvu-3244513.jpg" alt="Cultural Events" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-calendar-alt"></i> Cultural Events</h3>
                                    <p>Traditional celebrations</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-christian-heitz-285904-842711.jpg">
                                <img src="images/pexels-christian-heitz-285904-842711.jpg" alt="Local Art" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-palette"></i> Local Art</h3>
                                    <p>Traditional crafts and artwork</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-pixabay-268533.jpg">
                                <img src="images/pexels-pixabay-268533.jpg" alt="Community Life" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-users"></i> Community Life</h3>
                                    <p>Daily life in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-vladalex94-1402787.jpg">
                                <img src="images/pexels-vladalex94-1402787.jpg" alt="Historical Artifacts" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-gem"></i> Historical Artifacts</h3>
                                    <p>Ancient treasures and artifacts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        },
        footer: "© 2025 مملكة وداي - جميع الحقوق محفوظة",
        store: {
            title: "متجر الكتب",
            description: "اكتشف مجموعتنا المختارة من الكتب المميزة",
            books: [
                {
                    id: 1,
                    title: "غاتسبي العظيم",
                    author: "ف. سكوت فيتزجيرالد",
                    price: "10.99 $",
                    image: "images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 2,
                    title: "أن تقتل طائراً بريئاً",
                    author: "هاربر لي",
                    price: "8.99 $",
                    image: "images/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 3,
                    title: "1984",
                    author: "جورج أورويل",
                    price: "9.99 $",
                    image: "images/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 4,
                    title: "كبرياء وتحامل",
                    author: "جين أوستن",
                    price: "7.99 $",
                    image: "images/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 5,
                    title: "الحارس في حقل الشوفان",
                    author: "ج.د. سالينجر",
                    price: "6.99 $",
                    image: "images/pexels-pixabay-268533.jpg"
                },
                {
                    id: 6,
                    title: "الغريب",
                    author: "ألبير كامو",
                    price: "11.99 $",
                    image: "images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 7,
                    title: "مئة عام من العزلة",
                    author: "غابرييل غارسيا ماركيز",
                    price: "12.99 $",
                    image: "images/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 8,
                    title: "الخيميائي",
                    author: "باولو كويلو",
                    price: "9.99 $",
                    image: "images/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 9,
                    title: "البؤساء",
                    author: "فيكتور هوغو",
                    price: "14.99 $",
                    image: "images/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 10,
                    title: "دون كيخوتي",
                    author: "ميغيل دي سرفانتس",
                    price: "13.99 $",
                    image: "images/pexels-pixabay-268533.jpg"
                }
            ]
        }
    },
    en: {
        siteName: "Kingdom of Waddai",
        navigation: {
            mission: "Mission",
            vision: "Vision",
            goals: "Goals",
            language: "Language",
            landscape: "Landscape",
            history: "History",
            places: "Places",
            spaces: "Spaces",
            society: "Society",
            politics: "Politics & Military",
            economy: "Economy",
            socialLife: "Social and Human Life",
            publications: "Publications",
            gallery: "Gallery",
            map: "Map",
            video: "Video",
            shop: "Shop",
            news: "News",
            events: "Events",
            donate: "Donate",
            ancientHistory: "Ancient History",
            cultureHeritage: "Culture and Natural Heritage",
            intangibleHeritage: "Intangible Cultural Heritage"
        },
        sections: {
            mission: {
                title: '<i class="fas fa-bullseye"></i> Our Mission',
                content: "To preserve and promote the rich heritage and history of the Kingdom of Waddai for future generations."
            },
            vision: {
                title: '<i class="fas fa-eye"></i> Our Vision',
                content: "To be the primary source of knowledge about the history and culture of the Kingdom of Waddai."
            },
            goals: {
                title: '<i class="fas fa-target"></i> Our Goals',
                content: `
                    <div class="goals-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book-open fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Documentation and Preservation</h5>
                                        <p class="card-text">Documenting and preserving the cultural and historical heritage of the Kingdom of Waddai through systematic research and recording.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Education and Awareness</h5>
                                        <p class="card-text">Spreading awareness about the history and culture of the Kingdom of Waddai through educational programs and heritage workshops.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">International Collaboration</h5>
                                        <p class="card-text">Building partnerships with academic institutions and cultural organizations internationally to enhance understanding of Waddai's heritage on a global scale.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hands-helping fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Local Community Support</h5>
                                        <p class="card-text">Strengthening the cultural identity of local communities and supporting artisans and storytellers in preserving traditional practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            history: {
                title: '<i class="fas fa-landmark"></i> History',
                content: `
                    <div class="history-overview mb-4">
                        <div class="alert alert-info">
                            <h4><i class="fas fa-crown me-2"></i>Historical Overview</h4>
                            <p>The Kingdom of Waddai (or Ouaddaï) was founded around 1635 CE by Sultan Abd al-Karim and flourished for over three centuries as one of the most important Islamic kingdoms in Central Africa, located in what is now eastern Chad.</p>
                        </div>
                    </div>

                    <div class="history-periods">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 history-card founding-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Founding Period (1635-1678)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Abd al-Karim (1635-1678):</strong><br>
                                            - Founder and organizer of the kingdom's political structure<br>
                                            - Built the first capital at Wara<br>
                                            - Established administrative and military systems<br>
                                            - Spread Islam throughout the region
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card expansion-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Expansion Period (1678-1803)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Ya'qub Arif (1681-1707):</strong><br>
                                            - Extended kingdom's borders eastward and southward<br>
                                            - Developed trans-Saharan trade networks<br>
                                            <strong>Sultan Muhammad Sharif (1803-1813):</strong><br>
                                            - Peak of military and political power
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card golden-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Golden Age (1803-1874)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Muhammad Sharif:</strong><br>
                                            - Moved capital to Abéché<br>
                                            - Flourishing of trade and culture<br>
                                            - Built mosques and Quranic schools<br>
                                            - Developed crafts and industries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card resistance-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Resistance Period (1874-1912)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Yusuf (1874-1898):</strong><br>
                                            - Resisted French colonial invasion<br>
                                            - Defended kingdom's independence<br>
                                            - Fierce battles against colonial forces<br>
                                            - Kingdom fell in 1912
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card rulers-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-users-crown fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Notable Rulers</h5>
                                        <p class="card-text">
                                            - Sultan Abd al-Karim (Founder)<br>
                                            - Sultan Ya'qub Arif<br>
                                            - Sultan Muhammad Sharif<br>
                                            - Sultan Ali Dinar<br>
                                            - Sultan Yusuf (Last ruler)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card legacy-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Historical Legacy</h5>
                                        <p class="card-text">
                                            - Architectural remains in Wara and Abéché<br>
                                            - Cultural and religious heritage<br>
                                            - Administrative and legal systems<br>
                                            - Local language and literature<br>
                                            - Social traditions and customs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="historical-timeline mt-5">
                        <h4><i class="fas fa-clock me-2"></i>Major Timeline</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-date">1635</div>
                                <div class="timeline-content">Foundation of Waddai Kingdom by Sultan Abd al-Karim</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1681</div>
                                <div class="timeline-content">Beginning of Sultan Ya'qub Arif's reign and expansion period</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1803</div>
                                <div class="timeline-content">Sultan Muhammad Sharif moves capital to Abéché</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1874</div>
                                <div class="timeline-content">Beginning of resistance against French colonial expansion</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1912</div>
                                <div class="timeline-content">Fall of the last Sultan of Waddai and end of independent rule</div>
                            </div>
                        </div>
                    </div>
                `
            },
            society: {
                title: '<i class="fas fa-users"></i> Society',
                content: `<ul class="tribes-list">
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Maba</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Sara People</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Kanembu Tribe</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Toubou Tribe</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Arab Tribes</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Daza</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Hadjarai</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Mbororo (sub-group of the Fulani people)</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Mayo-Kebbi</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> The Kanem-Bornou</li>
                </ul>`
            },

            landscape: {
                title: '<i class="fas fa-mountain"></i> Landscape',
                content: `
                    <div class="places-spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <a href="#places" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-map-marker-alt fa-3x mb-3 text-primary"></i>
                                            <h5 class="card-title">Places</h5>
                                            <p class="card-text">Geographical locations and specific landmarks in the Kingdom of Waddai</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="#spaces" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-success"></i>
                                            <h5 class="card-title">Spaces</h5>
                                            <p class="card-text">Vast areas and diverse natural environments</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                `
            },
            places: {
                title: '<i class="fas fa-map-marker-alt"></i> Places',
                content: `
                    <div class="places-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mountain fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Eastern Waddai Mountains</h5>
                                        <p class="card-text">Mountain ranges extending across the eastern region, forming a natural barrier and influencing local climate. Contains unique biodiversity and serves as home to rare plants and animals.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-water fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Batha River and Valleys</h5>
                                        <p class="card-text">The main lifeline of the Waddai region, providing water for agriculture and drinking. The region is intersected by fertile valleys that support agricultural and pastoral life, forming the basic ecosystem.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mosque fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Mosques and Shrines</h5>
                                        <p class="card-text">The region includes important historical mosques such as the Great Mosque of Abéché and the ancient Ouara Mosque, along with shrines of saints and scholars reflecting the rich Islamic heritage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Ouara Historical Ruins</h5>
                                        <p class="card-text">Ruins of Sultan Abd al-Karim ibn Jame's palace from the 16th century, surrounded by a wall 325 meters in diameter. Includes a high watchtower, council hall, and royal residences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            spaces: {
                title: '<i class="fas fa-expand-arrows-alt"></i> Spaces',
                content: `
                    <div class="spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-sun fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Sahara and Ennedi Plateau</h5>
                                        <p class="card-text">Desert regions in the north where it meets the Great Sahara. Features the Ennedi sandstone plateau with spectacular rock formations and rare green oases like Archei and Tokou, providing water and life in the heart of the desert.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Plains and Savanna</h5>
                                        <p class="card-text">Fertile savanna plains in the south that support agriculture and livestock. These areas feature higher rainfall and fertile soil, making them suitable for growing millet and sorghum and raising cattle and goats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            language: {
                title: '<i class="fas fa-language"></i> Language',
                content: `
                    <p>The primary language of Waddai is Maba, belonging to the Nilo-Saharan language family. Chadian Arabic is widely used as a trade and communication language. Multiple dialects exist, including Masalit and Tama variants. Arabic script was traditionally used for official and religious documents.</p>
                    
                    <div class="language-resources mt-4">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Maba-Bura Mabang</h5>
                                        <p class="card-text">The fundamental book for learning the Maba language</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Learn Maba-Bura Mabang</h5>
                                        <p class="card-text">Interactive lessons for language learning</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-toolbox fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Learning Kit</h5>
                                        <p class="card-text">Comprehensive educational tools and materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            politics: {
                title: '<i class="fas fa-balance-scale"></i> Politics & Military',
                content: `
                    <div class="politics-military-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 politics-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Political History</h5>
                                        <p class="card-text">Waddai's political system was characterized by hereditary monarchy, with sultans ruling with the help of an advisory council. Notable rulers included Sultan Abd al-Karim Sabun and Sultan Muhammad Sharif. The kingdom maintained important alliances with neighboring sultanates.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 military-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Military Aspects</h5>
                                        <p class="card-text">The military was strong and organized, with specialized infantry and cavalry units. The armed forces were well-trained and highly organized, playing a crucial role in protecting the kingdom and maintaining its borders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            economy: {
                title: '<i class="fas fa-coins"></i> Economy',
                content: `
                    <div class="economy-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-trade-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-route fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Ancient Trade</h5>
                                        <p class="card-text">Waddai's economy was based on trans-Saharan trade, particularly with Egypt and Sudan. The kingdom was an important center for ivory, feather, and leather trade. Various currencies were used for trade, including cowrie shells and metal coins.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 modern-economic-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-chart-line fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Modern Economic Trends</h5>
                                        <p class="card-text">Economic activities have evolved to include modern agriculture, livestock breeding, and mining. Infrastructure and local trade have developed, with a focus on sustainable development and preserving natural resources for future generations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            socialLife: {
                title: '<i class="fas fa-users-cog"></i> Social and Human Life',
                content: `
                    <div class="social-life-grid">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 education-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Education</h5>
                                        <p class="card-text">Waddai's education system includes traditional Quranic schools and modern education. It focuses on learning the Quran and Arabic language, along with basic crafts and trade skills.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 transformation-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-exchange-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Social Transformation</h5>
                                        <p class="card-text">Waddai communities have experienced gradual development in social structure while preserving core traditions and values. Lifestyle patterns and social relationships have evolved over time.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 women-youth-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-female fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Women & Youth</h5>
                                        <p class="card-text">Women play an important role in Waddai society, especially in trade and handicrafts. Youth represent the driving force for development and preservation of cultural heritage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            publications: {
                title: '<i class="fas fa-book"></i> Publications',
                content: `<p>A diverse collection of publications about the Kingdom of Waddai:</p>
                <ul>
                    <li><i class="fas fa-scroll"></i> Historical documents from the royal era</li>
                    <li><i class="fas fa-file-alt"></i> Research papers on cultural heritage</li>
                    <li><i class="fas fa-book-open"></i> Books and articles about kingdom history</li>
                    <li><i class="fas fa-graduation-cap"></i> Academic studies on society and culture</li>
                </ul>`,
                items: []
            },
            news: {
                title: '<i class="fas fa-newspaper"></i> News',
                content: `<p>Latest updates and news:</p>
                <ul>
                    <li><i class="fas fa-search"></i> New historical discoveries</li>
                    <li><i class="fas fa-flask"></i> Recent research findings</li>
                    <li><i class="fas fa-users"></i> Community news and events</li>
                    <li><i class="fas fa-project-diagram"></i> Cultural project developments</li>
                </ul>`,
                items: []
            },
            events: {
                title: '<i class="fas fa-calendar-alt"></i> Events',
                content: `<p>Upcoming and past events:</p>
                <ul>
                    <li><i class="fas fa-chalkboard-teacher"></i> Academic conferences</li>
                    <li><i class="fas fa-music"></i> Cultural celebrations</li>
                    <li><i class="fas fa-palette"></i> Historical exhibitions</li>
                    <li><i class="fas fa-tools"></i> Heritage workshops</li>
                </ul>`,
                items: []
            },
            donate: {
                title: '<i class="fas fa-hand-holding-heart"></i> Donate',
                content: `
                    <div class="donation-info">
                        <p>For transparency and integrity, an official account will soon be opened in the organization's name for all those wishing to donate. We appreciate your support and cooperation.</p>
                        <div class="bank-transfer">
                            <h3><i class="fas fa-university"></i> Bank Transfer</h3>
                            <p>Bank account information will be added soon</p>
                        </div>
                    </div>
                `
            },
            map: {
                title: '<i class="fas fa-map-marked-alt"></i> Map',
                content: `
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d20.8114851!3d13.8287529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11314472a60a8319%3A0xf2526dfd44b27605!2sAb%C3%A9ch%C3%A9%2C%20Chad!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                `
            },
            video: {
                title: '<i class="fas fa-video"></i> Video',
                content: `
                    <div class="video-section">
                        <div class="video-grid">
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/A.mp4" type="video/mp4">
                                    <source src="videos/A.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video A</h3>
                                        <p class="video-description">Educational content about Kingdom of Waddai</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/B.mp4" type="video/mp4">
                                    <source src="videos/B.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video B</h3>
                                        <p class="video-description">History and culture of the Kingdom</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/C.mp4" type="video/mp4">
                                    <source src="videos/C.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video C</h3>
                                        <p class="video-description">Landmarks and heritage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            ancientHistory: {
                title: '<i class="fas fa-history"></i> Ancient History',
                content: `
                    <div class="ancient-history-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-palace fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Kingdom of Waddai</h5>
                                        <p class="card-text">The great Kingdom of Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Tunjur-Dajo</h5>
                                        <p class="card-text">Ancient kingdom that preceded Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Sao Civilization</h5>
                                        <p class="card-text">Ancient civilization of the Lake Chad region</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-castle fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Kanem-Bornu Kingdom</h5>
                                        <p class="card-text">Powerful empire in Central Africa</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Bagirmi Kingdom</h5>
                                        <p class="card-text">Historical kingdom of the Chad basin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            cultureHeritage: {
                title: '<i class="fas fa-landmark"></i> Culture and Natural Heritage',
                content: `
                    <div class="culture-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-history fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Prehistoric Period</h5>
                                        <p class="card-text">Exploring ancient historical periods in the Waddai region</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Archaeological Cultural Heritage</h5>
                                        <p class="card-text">Important historical sites and artifacts in the region</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Natural Cultural Heritage</h5>
                                        <p class="card-text">Unique landscapes and environment of Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">UNESCO World Heritage Sites</h5>
                                        <p class="card-text">Sites inscribed on the World Heritage List</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-list-alt fa-3x mb-3 text-secondary"></i>
                                        <h5 class="card-title">UNESCO World Heritage Tentative List</h5>
                                        <p class="card-text">Candidate sites to join the World Heritage List</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-city fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Ruins of Ouara City</h5>
                                        <p class="card-text">Historical ruins and remains of the ancient city of Ouara</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-dark"></i>
                                        <h5 class="card-title">Heritage Protection and Preservation</h5>
                                        <p class="card-text">Efforts to protect and preserve cultural and natural heritage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            intangibleHeritage: {
                title: '<i class="fas fa-music"></i> Intangible Cultural Heritage',
                content: `
                    <div class="intangible-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-comments fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Oral Traditions and Expressions</h5>
                                        <p class="card-text">Oral traditions and expressions including language as a vehicle for intangible cultural heritage</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-theater-masks fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Performing Arts</h5>
                                        <p class="card-text">Traditional and contemporary performing arts of the Kingdom of Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-calendar-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Social Practices, Rituals and Festive Events</h5>
                                        <p class="card-text">Social practices, rituals and festive events in Waddai heritage</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Knowledge and Practices Concerning Nature and Universe</h5>
                                        <p class="card-text">Knowledge and practices concerning nature and universe in the Kingdom of Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hammer fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Traditional Craftsmanship Skills</h5>
                                        <p class="card-text">Skills related to traditional craftsmanship and inherited arts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            publications: {
                title: '<i class="fas fa-book"></i> Publications',
                content: `<p>A diverse collection of publications about the Kingdom of Waddai:</p>
                <ul>
                    <li><i class="fas fa-scroll"></i> Historical documents from the royal era</li>
                    <li><i class="fas fa-file-alt"></i> Research papers on cultural heritage</li>
                    <li><i class="fas fa-book-open"></i> Books and articles about kingdom history</li>
                    <li><i class="fas fa-graduation-cap"></i> Academic studies on society and culture</li>
                </ul>`,
                items: []
            },
            news: {
                title: '<i class="fas fa-newspaper"></i> News',
                content: `<p>Latest updates and news:</p>
                <ul>
                    <li><i class="fas fa-search"></i> New historical discoveries</li>
                    <li><i class="fas fa-flask"></i> Recent research findings</li>
                    <li><i class="fas fa-users"></i> Community news and events</li>
                    <li><i class="fas fa-project-diagram"></i> Cultural project developments</li>
                </ul>`,
                items: []
            },
            events: {
                title: '<i class="fas fa-calendar-alt"></i> Events',
                content: `<p>Upcoming and past events:</p>
                <ul>
                    <li><i class="fas fa-chalkboard-teacher"></i> Academic conferences</li>
                    <li><i class="fas fa-music"></i> Cultural celebrations</li>
                    <li><i class="fas fa-palette"></i> Historical exhibitions</li>
                    <li><i class="fas fa-tools"></i> Heritage workshops</li>
                </ul>`,
                items: []
            },
            donate: {
                title: '<i class="fas fa-hand-holding-heart"></i> Donate',
                content: `
                    <div class="donation-info">
                        <p>For transparency and integrity, an official account will soon be opened in the organization's name for all those wishing to donate. We appreciate your support and cooperation.</p>
                        <div class="bank-transfer">
                            <h3><i class="fas fa-university"></i> Bank Transfer</h3>
                            <p>Bank account information will be added soon</p>
                        </div>
                    </div>
                `
            },
            map: {
                title: '<i class="fas fa-map-marked-alt"></i> Map',
                content: `
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d20.8114851!3d13.8287529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11314472a60a8319%3A0xf2526dfd44b27605!2sAb%C3%A9ch%C3%A9%2C%20Chad!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                `
            },
            video: {
                title: '<i class="fas fa-video"></i> Video',
                content: `
                    <div class="video-section">
                        <div class="video-grid">
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/A.mp4" type="video/mp4">
                                        <source src="videos/A.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video A</h3>
                                        <p class="video-description">Educational content about Kingdom of Waddai</p>
                                    </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/B.mp4" type="video/mp4">
                                        <source src="videos/B.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video B</h3>
                                        <p class="video-description">History and culture of the Kingdom</p>
                                    </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/C.mp4" type="video/mp4">
                                        <source src="videos/C.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Video C</h3>
                                        <p class="video-description">Landmarks and heritage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            gallery: {
                title: '<i class="fas fa-images"></i> Gallery',
                content: `
                    <div class="gallery-container">
                        <div class="gallery-grid">
                            <div class="gallery-item" data-image="images/img_1_1748690905993.jpg">
                                <img src="images/img_1_1748690905993.jpg" alt="Kingdom of Waddai Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Kingdom of Waddai Heritage</h3>
                                    <p>Distinguished historical and cultural sites</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_2_1748690929995.jpg">
                                <img src="images/img_2_1748690929995.jpg" alt="Traditional Life" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-home"></i> Traditional Life</h3>
                                    <p>Authentic way of life in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_3_1748690940840.jpg">
                                <img src="images/img_3_1748690940840.jpg" alt="Natural Landscapes" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-mountain"></i> Natural Landscapes</h3>
                                    <p>Natural beauty of the Waddai region</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_4_1748690950427.jpg">
                                <img src="images/img_4_1748690950427.jpg" alt="Architectural Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-building"></i> Architectural Heritage</h3>
                                    <p>Traditional architecture and local construction</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_5_1748690957893.jpg">
                                <img src="images/img_5_1748690957893.jpg" alt="Traditional Crafts" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-tools"></i> Traditional Crafts</h3>
                                    <p>Inherited skills and artisan crafts</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_6_1748690973649.jpg">
                                <img src="images/img_6_1748690973649.jpg" alt="Community and Culture" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-users"></i> Community and Culture</h3>
                                    <p>Social life and cultural traditions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_7_1748691005093.jpg">
                                <img src="images/img_7_1748691005093.jpg" alt="Heritage Events" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-calendar-alt"></i> Heritage Events</h3>
                                    <p>Traditional celebrations and occasions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_8_1748691019000.jpg">
                                <img src="images/img_8_1748691019000.jpg" alt="Historical Monuments" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-landmark"></i> Historical Monuments</h3>
                                    <p>Ancient landmarks and monuments in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg">
                                <img src="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg" alt="Kingdom of Waddai" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Kingdom of Waddai</h3>
                                    <p>Grandeur of history and heritage</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/bag.jpg">
                                <img src="images/bag.jpg" alt="Traditional Tools" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-shopping-bag"></i> Traditional Tools</h3>
                                    <p>Heritage tools and traditional craftsmanship</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/david-karp-EJIFu_veczw-unsplash.jpg">
                                <img src="images/david-karp-EJIFu_veczw-unsplash.jpg" alt="Cultural Heritage" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-book"></i> Cultural Heritage</h3>
                                    <p>Preserving our rich traditions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/hhh.jpg">
                                <img src="images/hhh.jpg" alt="Natural Beauty" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-leaf"></i> Natural Beauty</h3>
                                    <p>Spectacular natural landscapes of Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/michael-bourgault-aHetdmuNoO4-unsplash.jpg">
                                <img src="images/michael-bourgault-aHetdmuNoO4-unsplash.jpg" alt="Historical Sites" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-landmark"></i> Historical Sites</h3>
                                    <p>Ancient ruins and artifacts</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-andyhvu-3244513.jpg">
                                <img src="images/pexels-andyhvu-3244513.jpg" alt="Cultural Events" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-calendar-alt"></i> Cultural Events</h3>
                                    <p>Traditional celebrations</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-christian-heitz-285904-842711.jpg">
                                <img src="images/pexels-christian-heitz-285904-842711.jpg" alt="Local Art" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-palette"></i> Local Art</h3>
                                    <p>Traditional crafts and artwork</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-pixabay-268533.jpg">
                                <img src="images/pexels-pixabay-268533.jpg" alt="Community Life" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-users"></i> Community Life</h3>
                                    <p>Daily life in Waddai</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/pexels-vladalex94-1402787.jpg">
                                <img src="images/pexels-vladalex94-1402787.jpg" alt="Historical Artifacts" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-gem"></i> Historical Artifacts</h3>
                                    <p>Ancient treasures and artifacts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        },
        footer: "© 2025 Kingdom of Waddai - All rights reserved",
        store: {
            title: "Bookstore",
            description: "Discover our curated collection of exceptional books",
            books: [
                {
                    id: 1,
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald",
                    price: "$10.99",
                    image: "images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 2,
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    price: "$8.99",
                    image: "images/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 3,
                    title: "1984",
                    author: "George Orwell",
                    price: "$9.99",
                    image: "images/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 4,
                    title: "كبرياء وتحامل",
                    author: "جين أوستن",
                    price: "7.99 $",
                    image: "images/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 5,
                    title: "الحارس في حقل الشوفان",
                    author: "ج.د. سالينجر",
                    price: "6.99 $",
                    image: "images/pexels-pixabay-268533.jpg"
                },
                {
                    id: 6,
                    title: "الغريب",
                    author: "ألبير كامو",
                    price: "11.99 $",
                    image: "images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 7,
                    title: "مئة عام من العزلة",
                    author: "غابرييل غارسيا ماركيز",
                    price: "12.99 $",
                    image: "images/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 8,
                    title: "الخيميائي",
                    author: "باولو كويلو",
                    price: "9.99 $",
                    image: "images/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 9,
                    title: "البؤساء",
                    author: "فيكتور هوغو",
                    price: "14.99 $",
                    image: "images/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 10,
                    title: "دون كيخوتي",
                    author: "ميغيل دي سرفانتس",
                    price: "13.99 $",
                    image: "images/pexels-pixabay-268533.jpg"
                }
            ]
        }
    },
    fr: {
        siteName: "Royaume du Ouaddaï",
        navigation: {
            mission: "Mission",
            vision: "Vision",
            goals: "Goals",
            language: "Language",
            landscape: "Landscape",
            history: "History",
            places: "Places",
            spaces: "Spaces",
            society: "Society",
            politics: "Politics & Military",
            economy: "Economy",
            socialLife: "Social and Human Life",
            publications: "Publications",
            gallery: "Gallery",
            map: "Map",
            video: "Video",
            shop: "Shop",
            news: "News",
            events: "Events",
            donate: "Donate",
            ancientHistory: "Ancient History",
            cultureHeritage: "Culture and Natural Heritage",
            intangibleHeritage: "Intangible Cultural Heritage"
        },
        sections: {
            mission: {
                title: '<i class="fas fa-bullseye"></i> Notre Mission',
                content: "Préserver et promouvoir l'héritage riche et historique du Royaume du Ouaddaï pour les générations futures."
            },
            vision: {
                title: '<i class="fas fa-eye"></i> Notre Vision',
                content: "Être la principale source de connaissances sur l'histoire et la culture du Royaume du Ouaddaï."
            },
            goals: {
                title: '<i class="fas fa-target"></i> Nos Objectifs',
                content: `
                    <div class="goals-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book-open fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Documentation et Conservation</h5>
                                        <p class="card-text">La documentation et la conservation de l'héritage culturel et historique du Royaume du Ouaddaï par la recherche systématique et l'enregistrement.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Éducation et Sensibilisation</h5>
                                        <p class="card-text">Diffuser la conscience sur l'histoire et la culture du Royaume du Ouaddaï par le biais de programmes d'éducation et de travaux sur l'héritage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Collaboration Internationale</h5>
                                        <p class="card-text">Établir des partenariats avec des institutions académiques et des organisations culturelles internationalement pour renforcer la compréhension de l'héritage du Ouaddaï à l'échelle mondiale.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 goal-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hands-helping fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Support Communauté Locale</h5>
                                        <p class="card-text">Renforcer l'identité culturelle des communautés locales et soutenir les artisans et narrateurs dans la conservation des traditions traditionnelles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            history: {
                title: '<i class="fas fa-landmark"></i> Histoire',
                content: `
                    <div class="history-overview mb-4">
                        <div class="alert alert-info">
                            <h4><i class="fas fa-crown me-2"></i>Vue d'ensemble historique</h4>
                            <p>Le Royaume du Ouaddaï (ou Ouaddaï) a été fondé autour de 1635 CE par le Sultan Abd al-Karim et a floré pendant plus de trois siècles comme l'une des principales royaumes islamiques d'Afrique centrale, située dans ce qui est maintenant le Tchad oriental.</p>
                        </div>
                    </div>

                    <div class="history-periods">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 history-card founding-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Période de fondation (1635-1678)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Abd al-Karim (1635-1678):</strong><br>
                                            - Fondateur et organisateur de la structure politique du royaume<br>
                                            - Construction de la première capitale à Wara<br>
                                            - Établissement des systèmes administratifs et militaires<br>
                                            - Diffusion de l'islam dans la région
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card expansion-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Période d'expansion (1678-1803)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Ya'qub Arif (1681-1707):</strong><br>
                                            - Extension des frontières du royaume vers l'est et le sud<br>
                                            - Développement des réseaux commerciaux trans-sahariens<br>
                                            <strong>Sultan Muhammad Sharif (1803-1813):</strong><br>
                                            - Pic de puissance militaire et politique
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card golden-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Âge d'or (1803-1874)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Muhammad Sharif:</strong><br>
                                            - Déplacement de la capitale à Abéché<br>
                                            - Prospérité du commerce et de la culture<br>
                                            - Construction des mosquées et des écoles coraniques<br>
                                            - Développement des arts et des industries
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card resistance-period">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Période de résistance (1874-1912)</h5>
                                        <p class="card-text">
                                            <strong>Sultan Yusuf (1874-1898):</strong><br>
                                            - Résistance à l'invasion coloniale française<br>
                                            - Défense de l'indépendance du royaume<br>
                                            - Lourdes batailles contre les forces coloniales<br>
                                            - Royaume tombé en 1912
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card rulers-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-users-crown fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Règles notables</h5>
                                        <p class="card-text">
                                            - Sultan Abd al-Karim (Fondateur)<br>
                                            - Sultan Ya'qub Arif<br>
                                            - Sultan Muhammad Sharif<br>
                                            - Sultan Ali Dinar<br>
                                            - Sultan Yusuf (Dernier souverain)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col">
                                <div class="card h-100 history-card legacy-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Héritage historique</h5>
                                        <p class="card-text">
                                            - Résidences architecturales à Wara et Abéché<br>
                                            - Héritage culturel et religieux<br>
                                            - Systèmes administratifs et juridiques<br>
                                            - Langue locale et littérature<br>
                                            - Traditions sociales et coutumières
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="historical-timeline mt-5">
                        <h4><i class="fas fa-clock me-2"></i>Ligne temporelle majeure</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-date">1635</div>
                                <div class="timeline-content">Fondation du Royaume du Ouaddaï par le Sultan Abd al-Karim</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1681</div>
                                <div class="timeline-content">Début du règne du Sultan Ya'qub Arif et de la période d'expansion</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1803</div>
                                <div class="timeline-content">Le Sultan Muhammad Sharif déplace la capitale à Abéché</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1874</div>
                                <div class="timeline-content">Début de la résistance contre l'expansion coloniale française</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">1912</div>
                                <div class="timeline-content">Chute du dernier Sultan du Ouaddaï et fin du règne indépendant</div>
                            </div>
                        </div>
                    </div>
                `
            },
            society: {
                title: '<i class="fas fa-users"></i> Société',
                content: `<ul class="tribes-list">
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Maba</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Personnes Sara</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Le Tribu des Kanembu</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Le Tribu des Toubou</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Tribus Arabes</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Daza</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Hadjarai</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Mbororo (sous-groupe des peuples Fulani)</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Mayo-Kebbi</li>
                    <li class="tribe-item"><i class="fas fa-user-friends"></i> Les Kanem-Bornou</li>
                </ul>`
            },

            landscape: {
                title: '<i class="fas fa-mountain"></i> Paysage',
                content: `
                    <div class="places-spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <a href="#places" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-map-marker-alt fa-3x mb-3 text-primary"></i>
                                            <h5 class="card-title">Lieux</h5>
                                            <p class="card-text">Localisations géographiques et repères spécifiques dans le Royaume du Ouaddaï</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <a href="#spaces" class="text-decoration-none">
                                    <div class="card h-100 space-card">
                                        <div class="card-body text-center">
                                            <i class="fas fa-expand-arrows-alt fa-3x mb-3 text-success"></i>
                                            <h5 class="card-title">Espaces</h5>
                                            <p class="card-text">Grandes zones et environnements naturels diversifiés</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                `
            },
            places: {
                title: '<i class="fas fa-map-marker-alt"></i> Lieux',
                content: `
                    <div class="places-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mountain fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Montagnes de l'Ouaddaï oriental</h5>
                                        <p class="card-text">Chaînes de montagnes s'étendant sur la région orientale, formant une barrière naturelle et influençant le climat local. Contient une biodiversité unique et sert de résidence à des plantes et des animaux rares.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-water fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Rivière de Batha et les vallées</h5>
                                        <p class="card-text">La principale veine veine de la région du Ouaddaï, fournissant de l'eau pour l'agriculture et le consommation. La région est traversée par des vallées fertiles soutenant la vie agricole et pastorale, formant le système écologique de base.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-mosque fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Mosquées et sanctuaires</h5>
                                        <p class="card-text">La région comprend des mosquées historiques importantes telles que la Grande Mosquée d'Abéché et la mosquée ancienne d'Ouara, ainsi que des sanctuaires des saints et des savants reflétant l'héritage islamique riche.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Ruines d'Ouara</h5>
                                        <p class="card-text">Ruines du palais du Sultan Abd al-Karim ibn Jame's de la 16ème siècle, entouré par une muraille de 325 mètres de diamètre. Inclut une tour de guet élevée et une salle de réunion et de résidences royales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            spaces: {
                title: '<i class="fas fa-expand-arrows-alt"></i> Espaces',
                content: `
                    <div class="spaces-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-sun fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Sahara et Plateau d'Ennedi</h5>
                                        <p class="card-text">Régions désertiques au nord où elles se rencontrent avec le Grand Sahara. Caractéristiques du plateau d'Ennedi en grès avec des formations rocheuses spectaculaires et des oasis vertes rares comme Archei et Tokou, fournissant de l'eau et de la vie dans le cœur du désert.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 space-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-seedling fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Plaines et Savanna</h5>
                                        <p class="card-text">Savanes fertiles au sud soutenant l'agriculture et l'élevage. Ces zones présentent une plus forte précipitation et un sol fertile, les rendant adaptés pour la culture du mil et du sorgho et l'élevage des bovins et des chèvres.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            language: {
                title: '<i class="fas fa-language"></i> Langue',
                content: `
                    <p>La langue principale du Ouaddaï est le Maba, appartenant à la famille des langues nilo-sahariennes. L'arabe tchadien est largement utilisé comme langue de commerce et de communication. Plusieurs dialectes existent, y compris les variantes Masalit et Tama. L'écriture arabe était traditionnellement utilisée pour les documents officiels et religieux.</p>
                    
                    <div class="language-resources mt-4">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-book fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Maba-Bura Mabang</h5>
                                        <p class="card-text">Le livre fondamental pour apprendre la langue Maba</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Apprendre Maba-Bura Mabang</h5>
                                        <p class="card-text">Cours interactifs pour l'apprentissage de la langue</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 language-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-toolbox fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Kit d'apprentissage</h5>
                                        <p class="card-text">Outils et matériaux d'apprentissage complets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            politics: {
                title: '<i class="fas fa-balance-scale"></i> Politique et Militaire',
                content: `
                    <div class="politics-military-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 politics-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Histoire politique</h5>
                                        <p class="card-text">Le système politique du Ouaddaï était caractérisé par la monarchie héréditaire, avec les sultans régnant avec l'aide d'un conseil d'avis. Les souverains notables incluaient Sultan Abd al-Karim Sabun et Sultan Muhammad Sharif. Le royaume a maintenu des alliances importantes avec les sultanats voisins.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 military-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Aspects militaires</h5>
                                        <p class="card-text">L'armée était forte et organisée, avec des unités d'infanterie et de cavalerie spécialisées. Les forces armées étaient bien formées et très organisées, jouant un rôle crucial dans la protection du royaume et la maintenance de ses frontières.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            economy: {
                title: '<i class="fas fa-coins"></i> Économie',
                content: `
                    <div class="economy-grid">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-trade-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-route fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Commerce antique</h5>
                                        <p class="card-text">L'économie du Ouaddaï était basée sur le commerce trans-saharien, particulièrement avec l'Égypte et le Soudan. Le royaume était un important centre pour le commerce de l'ivoire, de la plume et de la peau. Diverses devises ont été utilisées pour le commerce, y compris les coquillages et les pièces de métal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 modern-economic-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-chart-line fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Tendances économiques modernes</h5>
                                        <p class="card-text">Les activités économiques ont évolué pour inclure l'agriculture moderne, l'élevage des bétails et l'exploitation minière. Les infrastructures et le commerce local ont développé, avec un focus sur le développement durable et la conservation des ressources naturelles pour les générations futures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            socialLife: {
                title: '<i class="fas fa-users-cog"></i> Vie sociale et humaine',
                content: `
                    <div class="social-life-grid">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100 education-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Éducation</h5>
                                        <p class="card-text">Le système éducatif du Ouaddaï comprend des écoles coraniques traditionnelles et modernes. Il se concentre sur l'apprentissage du Coran et de la langue arabe, ainsi que sur les compétences de base en artisanat et commerce.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 transformation-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-exchange-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Transformation sociale</h5>
                                        <p class="card-text">Les communautés du Ouaddaï ont connu un développement progressif dans la structure sociale tout en préservant les traditions et les valeurs essentielles. Les schémas de vie et les relations sociales ont évolué au fil du temps.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 women-youth-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-female fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Femmes et jeunes</h5>
                                        <p class="card-text">Les femmes jouent un rôle important dans la société du Ouaddaï, surtout dans le commerce et les métiers de main-d'œuvre. Les jeunes représentent la force motrice pour le développement et la conservation de l'héritage culturel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            publications: {
                title: '<i class="fas fa-book"></i> Publications',
                content: `<p>Une collection diversifiée de publications sur le Royaume du Ouaddaï:</p>
                <ul>
                    <li><i class="fas fa-scroll"></i> Documents historiques de l'ère royale</li>
                    <li><i class="fas fa-file-alt"></i> Recherches sur l'héritage culturel</li>
                    <li><i class="fas fa-book-open"></i> Livres et articles sur l'histoire du royaume</li>
                    <li><i class="fas fa-graduation-cap"></i> Études académiques sur la société et la culture</li>
                </ul>`,
                items: []
            },
            news: {
                title: '<i class="fas fa-newspaper"></i> Actualités',
                content: `<p>Dernières mises à jour et actualités:</p>
                <ul>
                    <li><i class="fas fa-search"></i> Nouvelles découvertes historiques</li>
                    <li><i class="fas fa-flask"></i> Nouvelles recherches</li>
                    <li><i class="fas fa-users"></i> Nouvelles communautaires et événements</li>
                    <li><i class="fas fa-project-diagram"></i> Développements de projets culturels</li>
                </ul>`,
                items: []
            },
            events: {
                title: '<i class="fas fa-calendar-alt"></i> Événements',
                content: `<p>Événements à venir et passés:</p>
                <ul>
                    <li><i class="fas fa-chalkboard-teacher"></i> Conférences académiques</li>
                    <li><i class="fas fa-music"></i> Celebrations culturelles</li>
                    <li><i class="fas fa-palette"></i> Expositions historiques</li>
                    <li><i class="fas fa-tools"></i> Travaux sur l'héritage</li>
                </ul>`,
                items: []
            },
            donate: {
                title: '<i class="fas fa-hand-holding-heart"></i> Donner',
                content: `
                    <div class="donation-info">
                        <p>Pour la transparence et l'intégrité, un compte officiel sera bientôt ouvert au nom de l'organisation pour tous ceux qui souhaitent faire un don. Nous apprécions votre soutien et votre coopération.</p>
                        <div class="bank-transfer">
                            <h3><i class="fas fa-university"></i> Virement bancaire</h3>
                            <p>Les informations du compte bancaire seront bientôt ajoutées</p>
                        </div>
                    </div>
                `
            },
            map: {
                title: '<i class="fas fa-map-marked-alt"></i> Carte',
                content: `
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d20.8114851!3d13.8287529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11314472a60a8319%3A0xf2526dfd44b27605!2sAb%C3%A9ch%C3%A9%2C%20Chad!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                `
            },
            video: {
                title: '<i class="fas fa-video"></i> Vidéo',
                content: `
                    <div class="video-section">
                        <div class="video-grid">
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/A.mp4" type="video/mp4">
                                    <source src="videos/A.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo A</h3>
                                        <p class="video-description">Contenu éducatif sur le Royaume du Ouaddaï</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/B.mp4" type="video/mp4">
                                    <source src="videos/B.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                            </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo B</h3>
                                        <p class="video-description">Histoire et culture du Royaume</p>
                                </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                    <source src="videos/C.mp4" type="video/mp4">
                                    <source src="videos/C.webm" type="video/webm">
                                </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo C</h3>
                                        <p class="video-description">Monuments et patrimoine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            ancientHistory: {
                title: '<i class="fas fa-history"></i> Histoire ancienne',
                content: `
                    <div class="ancient-history-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-palace fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Royaume de Ouaddaï</h5>
                                        <p class="card-text">Le grand Royaume de Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-crown fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Tunjur-Dajo</h5>
                                        <p class="card-text">Royaume ancien qui précède Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Civilisation de Sao</h5>
                                        <p class="card-text">Civilisation ancienne de la région de la Lagune de Chad</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-castle fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Royaume de Kanem-Bornu</h5>
                                        <p class="card-text">Empire puissant en Afrique centrale</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 ancient-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-landmark fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Royaume de Bagirmi</h5>
                                        <p class="card-text">Royaume historique du bassin de Chad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            cultureHeritage: {
                title: '<i class="fas fa-landmark"></i> Culture et Héritage Naturel',
                content: `
                    <div class="culture-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-history fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Période préhistorique</h5>
                                        <p class="card-text">Exploration des périodes historiques anciennes dans la région du Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-monument fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Héritage culturel archéologique</h5>
                                        <p class="card-text">Sites historiques importants et artefacts dans la région</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Héritage culturel naturel</h5>
                                        <p class="card-text">Paysages uniques et environnementaux de Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-globe fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Sites du patrimoine mondial de l'UNESCO</h5>
                                        <p class="card-text">Sites inscrits sur la liste du patrimoine mondial</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-list-alt fa-3x mb-3 text-secondary"></i>
                                        <h5 class="card-title">Liste provisoire du patrimoine mondial de l'UNESCO</h5>
                                        <p class="card-text">Sites candidats pour rejoindre la liste du patrimoine mondial</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-city fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Ruines d'Ouara</h5>
                                        <p class="card-text">Ruines et résidus de la ville d'Ouara ancienne</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-shield-alt fa-3x mb-3 text-dark"></i>
                                        <h5 class="card-title">Protection et conservation de l'héritage</h5>
                                        <p class="card-text">Efforts pour protéger et préserver l'héritage culturel et naturel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            intangibleHeritage: {
                title: '<i class="fas fa-music"></i> Héritage culturel intangible',
                content: `
                    <div class="intangible-heritage-grid">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-comments fa-3x mb-3 text-primary"></i>
                                        <h5 class="card-title">Traditions orales et expressions</h5>
                                        <p class="card-text">Traditions orales et expressions incluant la langue comme moyen de transmission de l'héritage culturel</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-theater-masks fa-3x mb-3 text-success"></i>
                                        <h5 class="card-title">Arts de la scène</h5>
                                        <p class="card-text">Arts traditionnels et contemporains du Royaume du Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-calendar-alt fa-3x mb-3 text-warning"></i>
                                        <h5 class="card-title">Pratiques sociales, rituel et événementiel</h5>
                                        <p class="card-text">Pratiques sociales, rituel et événementielles dans l'héritage du Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-leaf fa-3x mb-3 text-info"></i>
                                        <h5 class="card-title">Connaissances et pratiques concernant la nature et l'univers</h5>
                                        <p class="card-text">Connaissances et pratiques concernant la nature et l'univers dans le Royaume du Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 heritage-card">
                                    <div class="card-body text-center">
                                        <i class="fas fa-hammer fa-3x mb-3 text-danger"></i>
                                        <h5 class="card-title">Compétences en art artisanal traditionnel</h5>
                                        <p class="card-text">Compétences liées à l'artisanat traditionnel et aux arts hérités</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            publications: {
                title: '<i class="fas fa-book"></i> Publications',
                content: `<p>Une collection diversifiée de publications sur le Royaume du Ouaddaï:</p>
                <ul>
                    <li><i class="fas fa-scroll"></i> Documents historiques de l'ère royale</li>
                    <li><i class="fas fa-file-alt"></i> Recherches sur l'héritage culturel</li>
                    <li><i class="fas fa-book-open"></i> Livres et articles sur l'histoire du royaume</li>
                    <li><i class="fas fa-graduation-cap"></i> Études académiques sur la société et la culture</li>
                </ul>`,
                items: []
            },
            news: {
                title: '<i class="fas fa-newspaper"></i> Actualités',
                content: `<p>Dernières mises à jour et actualités:</p>
                <ul>
                    <li><i class="fas fa-search"></i> Nouvelles découvertes historiques</li>
                    <li><i class="fas fa-flask"></i> Nouvelles recherches</li>
                    <li><i class="fas fa-users"></i> Nouvelles communautaires et événements</li>
                    <li><i class="fas fa-project-diagram"></i> Développements de projets culturels</li>
                </ul>`,
                items: []
            },
            events: {
                title: '<i class="fas fa-calendar-alt"></i> Événements',
                content: `<p>Événements à venir et passés:</p>
                <ul>
                    <li><i class="fas fa-chalkboard-teacher"></i> Conférences académiques</li>
                    <li><i class="fas fa-music"></i> Celebrations culturelles</li>
                    <li><i class="fas fa-palette"></i> Expositions historiques</li>
                    <li><i class="fas fa-tools"></i> Travaux sur l'héritage</li>
                </ul>`,
                items: []
            },
            donate: {
                title: '<i class="fas fa-hand-holding-heart"></i> Donner',
                content: `
                    <div class="donation-info">
                        <p>Pour la transparence et l'intégrité, un compte officiel sera bientôt ouvert au nom de l'organisation pour tous ceux qui souhaitent faire un don. Nous apprécions votre soutien et votre coopération.</p>
                        <div class="bank-transfer">
                            <h3><i class="fas fa-university"></i> Virement bancaire</h3>
                            <p>Les informations du compte bancaire seront bientôt ajoutées</p>
                        </div>
                    </div>
                `
            },
            map: {
                title: '<i class="fas fa-map-marked-alt"></i> Carte',
                content: `
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d20.8114851!3d13.8287529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11314472a60a8319%3A0xf2526dfd44b27605!2sAb%C3%A9ch%C3%A9%2C%20Chad!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                            width="100%" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                `
            },
            video: {
                title: '<i class="fas fa-video"></i> Vidéo',
                content: `
                    <div class="video-section">
                        <div class="video-grid">
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/A.mp4" type="video/mp4">
                                        <source src="videos/A.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo A</h3>
                                        <p class="video-description">Contenu éducatif sur le Royaume du Ouaddaï</p>
                                    </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/B.mp4" type="video/mp4">
                                        <source src="videos/B.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo B</h3>
                                        <p class="video-description">Histoire et culture du Royaume</p>
                                    </div>
                                </div>
                            </div>
                            <div class="video-item">
                                <div class="video-container">
                                    <video controls poster="" class="video-player">
                                        <source src="videos/C.mp4" type="video/mp4">
                                        <source src="videos/C.webm" type="video/webm">
                                    </video>
                                    <div class="video-controls">
                                        <button class="video-play-btn" aria-label="Play/Pause">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </div>
                                    <div class="video-overlay">
                                        <h3 class="video-title">Vidéo C</h3>
                                        <p class="video-description">Monuments et patrimoine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            gallery: {
                title: '<i class="fas fa-images"></i> Galerie',
                content: `
                    <div class="gallery-container">
                        <div class="gallery-grid">
                            <div class="gallery-item" data-image="images/img_1_1748690905993.jpg">
                                <img src="images/img_1_1748690905993.jpg" alt="Patrimoine du Royaume du Ouaddaï" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Patrimoine du Royaume du Ouaddaï</h3>
                                    <p>Sites historiques et culturels de distinction</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_2_1748690929995.jpg">
                                <img src="images/img_2_1748690929995.jpg" alt="Vie Traditionnelle" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-home"></i> Vie Traditionnelle</h3>
                                    <p>Mode de vie authentique au Ouaddaï</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_3_1748690940840.jpg">
                                <img src="images/img_3_1748690940840.jpg" alt="Paysages Naturels" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-mountain"></i> Paysages Naturels</h3>
                                    <p>Beauté naturelle de la région du Ouaddaï</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_4_1748690950427.jpg">
                                <img src="images/img_4_1748690950427.jpg" alt="Patrimoine Architectural" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-building"></i> Patrimoine Architectural</h3>
                                    <p>Architecture traditionnelle et construction locale</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_5_1748690957893.jpg">
                                <img src="images/img_5_1748690957893.jpg" alt="Artisanat Traditionnel" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-tools"></i> Artisanat Traditionnel</h3>
                                    <p>Compétences héritées et métiers d'art</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_6_1748690973649.jpg">
                                <img src="images/img_6_1748690973649.jpg" alt="Communauté et Culture" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-users"></i> Communauté et Culture</h3>
                                    <p>Vie sociale et traditions culturelles</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_7_1748691005093.jpg">
                                <img src="images/img_7_1748691005093.jpg" alt="Événements Patrimoniaux" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-calendar-alt"></i> Événements Patrimoniaux</h3>
                                    <p>Célébrations traditionnelles et occasions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/img_8_1748691019000.jpg">
                                <img src="images/img_8_1748691019000.jpg" alt="Monuments Historiques" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-landmark"></i> Monuments Historiques</h3>
                                    <p>Anciens repères et monuments au Ouaddaï</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg">
                                <img src="images/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg" alt="Royaume du Ouaddaï Patrimonial" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-crown"></i> Royaume du Ouaddaï</h3>
                                    <p>Grandeur de l'histoire et du patrimoine</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/bag.jpg">
                                <img src="images/bag.jpg" alt="Outils Traditionnels" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-shopping-bag"></i> Outils Traditionnels</h3>
                                    <p>Outils patrimoniaux et artisanat traditionnel</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/david-karp-EJIFu_veczw-unsplash.jpg">
                                <img src="images/david-karp-EJIFu_veczw-unsplash.jpg" alt="Culture et Patrimoine" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-book"></i> Culture et Patrimoine</h3>
                                    <p>Préserver nos riches traditions</p>
                                </div>
                            </div>
                            <div class="gallery-item" data-image="images/hhh.jpg">
                                <img src="images/hhh.jpg" alt="Beauté Naturelle" loading="lazy">
                                <div class="gallery-caption">
                                    <h3><i class="fas fa-leaf"></i> Beauté Naturelle</h3>
                                    <p>Paysages naturels spectaculaires du Ouaddaï</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        },
        footer: "© 2025 Royaume du Ouaddaï - Tous droits réservés",
        store: {
            title: "Librairie",
            description: "Découvrez notre collection sélectionnée de livres exceptionnels",
            books: [
                {
                    id: 1,
                    title: "Gatsby le Magnifique",
                    author: "F. Scott Fitzgerald",
                    price: "$10.99",
                    image: "images/gallery/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 2,
                    title: "Ne tirez pas sur l'oiseau moqueur",
                    author: "Harper Lee",
                    price: "$8.99",
                    image: "images/gallery/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 3,
                    title: "1984",
                    author: "George Orwell",
                    price: "$9.99",
                    image: "images/gallery/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 4,
                    title: "Orgueil et Préjugés",
                    author: "Jane Austen",
                    price: "$7.99",
                    image: "images/gallery/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 5,
                    title: "L'Attrape-cœurs",
                    author: "J.D. Salinger",
                    price: "$6.99",
                    image: "images/gallery/pexels-pixabay-268533.jpg"
                },
                {
                    id: 6,
                    title: "L'Étranger",
                    author: "Albert Camus",
                    price: "$11.99",
                    image: "images/gallery/albert-sukhanov-sB6e1jw9bBQ-unsplash.jpg"
                },
                {
                    id: 7,
                    title: "Cent ans de solitude",
                    author: "Gabriel García Márquez",
                    price: "$12.99",
                    image: "images/gallery/david-karp-EJIFu_veczw-unsplash.jpg"
                },
                {
                    id: 8,
                    title: "L'Alchimiste",
                    author: "Paulo Coelho",
                    price: "$9.99",
                    image: "images/gallery/michael-bourgault-aHetdmuNoO4-unsplash.jpg"
                },
                {
                    id: 9,
                    title: "Les Misérables",
                    author: "Victor Hugo",
                    price: "$14.99",
                    image: "images/gallery/pexels-andyhvu-3244513.jpg"
                },
                {
                    id: 10,
                    title: "Don Quichotte",
                    author: "Miguel de Cervantes",
                    price: "$13.99",
                    image: "images/gallery/pexels-pixabay-268533.jpg"
                }
            ]
        }
    }
};

// Make content available globally since we're not using modules
window.content = content;
