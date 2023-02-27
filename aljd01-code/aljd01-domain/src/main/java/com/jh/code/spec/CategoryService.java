package com.jh.code.spec;

import com.jh.code.jpo.CategoryJpo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public interface CategoryService {

    List<CategoryJpo> getCategoriesByParent(List<BigDecimal> categoryIdxList);

}
